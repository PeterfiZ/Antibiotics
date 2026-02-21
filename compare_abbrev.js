const fs = require('fs');
const vm = require('vm');
const path = require('path');

function loadFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try {
    vm.runInContext(code, sandbox, { filename: filePath });
  } catch (e) {
    console.error('Error evaluating', filePath, e.message);
    process.exit(2);
  }
  return sandbox.window;
}

const base = path.resolve(__dirname);
const files = {
  en: path.join(base, 'antibiotics_en.js'),
  hu: path.join(base, 'antibiotics_hu.js'),
  de: path.join(base, 'antibiotics_de.js')
};

const data = {};
for (const [lang, p] of Object.entries(files)) {
  if (!fs.existsSync(p)) {
    console.error('Missing file', p);
    process.exit(3);
  }
  const w = loadFile(p);
  const key = Object.keys(w).find(k=>k.startsWith('antibiotics_'));
  if (!key) {
    console.error('No window.antibiotics_* found in', p);
    process.exit(4);
  }
  data[lang] = w[key];
}

function getAbbrevMap(arr){
  const map = {};
  arr.forEach(item => {
    const name = (item.name && (item.name.en||item.name.hu||item.name.de)) || item.name || 'UNKNOWN';
    const grp = item.group || {};
    const abbr = grp.abbreviation || '';
    map[name] = { abbreviation: abbr, rawName: name };
  });
  return map;
}

const maps = {
  en: getAbbrevMap(data.en),
  hu: getAbbrevMap(data.hu),
  de: getAbbrevMap(data.de)
};

// collect canonical set of names across all files
const allNames = new Set();
Object.values(data).forEach(arr => arr.forEach(it=>{
  const n = it.name && (it.name.en||it.name.hu||it.name.de) || it.name || 'UNKNOWN';
  allNames.add(n);
}));

const report = { perFileCounts: {}, missingAbbreviations: {}, discrepancies: {} };
for (const lang of Object.keys(maps)) {
  report.perFileCounts[lang] = Object.keys(maps[lang]).length;
}

// missing abbreviation entries per file
for (const lang of Object.keys(maps)) {
  report.missingAbbreviations[lang] = [];
  for (const name of allNames) {
    const entry = maps[lang][name];
    if (!entry || !entry.abbreviation || entry.abbreviation.trim()==='') {
      report.missingAbbreviations[lang].push({ name, abbreviation: entry?entry.abbreviation:null });
    }
  }
}

// discrepancies: differing abbreviations for same named item across files
for (const name of allNames) {
  const abbrs = {};
  for (const lang of Object.keys(maps)) {
    const entry = maps[lang][name];
    abbrs[lang] = entry ? (entry.abbreviation||'') : null;
  }
  const uniq = new Set(Object.values(abbrs).filter(x=>x!==null));
  if (uniq.size>1) {
    report.discrepancies[name] = abbrs;
  }
}

console.log(JSON.stringify(report, null, 2));
