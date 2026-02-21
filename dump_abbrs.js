const fs = require('fs');
const vm = require('vm');
const path = require('path');

function loadFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: filePath });
  const key = Object.keys(sandbox.window).find(k=>k.startsWith('antibiotics_'));
  if (!key) throw new Error('no antibiotics array in ' + filePath);
  return sandbox.window[key];
}

const base = path.resolve(__dirname);
const files = {
  en: path.join(base, 'antibiotics_en.js'),
  hu: path.join(base, 'antibiotics_hu.js'),
  de: path.join(base, 'antibiotics_de.js')
};

const data = {};
for (const [lang, p] of Object.entries(files)) {
  data[lang] = loadFile(p).map(item=>{
    const name = item.name && (item.name.en||item.name.hu||item.name.de) || 'UNKNOWN';
    const abbr = (item.group && item.group.abbreviation) ? item.group.abbreviation : null;
    return { name, abbreviation: abbr };
  });
}

// build combined map by name
const allNames = new Set();
Object.values(data).forEach(arr=>arr.forEach(e=>allNames.add(e.name)));
const combined = {};
for (const name of Array.from(allNames).sort()){
  combined[name] = {
    en: (data.en.find(e=>e.name===name)||{}).abbreviation||null,
    hu: (data.hu.find(e=>e.name===name)||{}).abbreviation||null,
    de: (data.de.find(e=>e.name===name)||{}).abbreviation||null
  };
}

const out = { generatedAt: new Date().toISOString(), summaryCounts: { en: data.en.length, hu: data.hu.length, de: data.de.length }, combined };
console.log(JSON.stringify(out, null, 2));
