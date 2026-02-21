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
  return { key, arr: sandbox.window[key] };
}

function serializeArray(varName, arr) {
  return `window.${varName} = ` + JSON.stringify(arr, null, 2) + `;\n`;
}

const base = path.resolve(__dirname);
const paths = {
  en: path.join(base, 'antibiotics_en.js'),
  hu: path.join(base, 'antibiotics_hu.js'),
  de: path.join(base, 'antibiotics_de.js')
};

const huLoaded = loadFile(paths.hu);
const enLoaded = loadFile(paths.en);
const deLoaded = loadFile(paths.de);

// build map from hu by canonical name (prefer en, then hu, then de)
function canonicalName(item){
  if (!item || !item.name) return null;
  return item.name.en || item.name.hu || item.name.de || null;
}

const huMap = new Map();
for (const it of huLoaded.arr){
  const name = canonicalName(it);
  if (!name) continue;
  const abbr = it.group && it.group.abbreviation ? it.group.abbreviation : null;
  huMap.set(name, abbr);
}

function applyFromHu(targetArr, lang){
  let changed = 0;
  for (const it of targetArr){
    const name = canonicalName(it);
    if (!name) continue;
    const huAbbr = huMap.get(name);
    if (!huAbbr) continue; // nothing to copy
    if (!it.group) it.group = {};
    const cur = it.group.abbreviation;
    if (!cur || cur.toString().trim()===''){
      it.group.abbreviation = huAbbr;
      changed++;
    }
  }
  return changed;
}

const enChanges = applyFromHu(enLoaded.arr, 'en');
const deChanges = applyFromHu(deLoaded.arr, 'de');

// write back files (preserve original var name)
fs.writeFileSync(paths.en, serializeArray(enLoaded.key, enLoaded.arr), 'utf8');
fs.writeFileSync(paths.de, serializeArray(deLoaded.key, deLoaded.arr), 'utf8');

console.log('Applied abbreviations from HU:', { enChanges, deChanges });
