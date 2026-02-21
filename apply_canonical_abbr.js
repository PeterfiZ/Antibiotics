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

const enLoaded = loadFile(paths.en);
const huLoaded = loadFile(paths.hu);
const deLoaded = loadFile(paths.de);

function canonicalName(item){
  if (!item || !item.name) return null;
  return item.name.en || item.name.hu || item.name.de || null;
}

// Proposed canonical abbreviations for the remaining items
const mapping = {
  "TMP-SMX": "SXT",
  "Trimethoprim-sulfamethoxazole (TMP-SMX)": "SXT",
  "Ticarcillin-clavulanate": "TIC-CLA",
  "Aztreonam-Avibactam": "ATM-AVI",
  "Nafcillin": "NAF",
  "Dicloxacillin": "DCX",
  "Cefotetan": "CET",
  "Cefoperazone": "COP",
  "Ceftizoxime": "CTZ",
  "Ceftaroline": "CPT",
  "Cefepime-enmetazobactam": "FEP-ENM",
  "Ceftobiprole": "CBR",
  "Cefadroxil": "CFD",
  "Cefixime": "CFX",
  "Cefprozil": "CPZ",
  "Cefdinir": "CFN",
  "Ceftibuten": "CTB",
  "Cefpodoxime": "CPX",
  "Tobramycin": "TOB",
  "Cefditoren": "CFDT",
  "Telithromycin": "TEL",
  "Tetracycline": "TET",
  "Pristinamycin": "PRI",
  "Pivmecillinam": "PIV",
  "Norfloxacin": "NOR",
  "Prulifloxacin": "PRU",
  "Gemifloxacin": "GEM",
  "Gatifloxacin": "GAT"
};

function applyMappingToArray(arr){
  let changed = 0;
  for (const it of arr){
    const name = canonicalName(it);
    if (!name) continue;
    const proposed = mapping[name];
    if (!proposed) continue;
    if (!it.group) it.group = {};
    const cur = it.group.abbreviation;
    if (!cur || cur.toString().trim()===''){
      it.group.abbreviation = proposed;
      changed++;
    }
  }
  return changed;
}

const enChanged = applyMappingToArray(enLoaded.arr);
const huChanged = applyMappingToArray(huLoaded.arr);
const deChanged = applyMappingToArray(deLoaded.arr);

fs.writeFileSync(paths.en, serializeArray(enLoaded.key, enLoaded.arr), 'utf8');
fs.writeFileSync(paths.hu, serializeArray(huLoaded.key, huLoaded.arr), 'utf8');
fs.writeFileSync(paths.de, serializeArray(deLoaded.key, deLoaded.arr), 'utf8');

console.log('Applied canonical abbreviations:', { enChanged, huChanged, deChanged });
console.log('Mapping applied for keys:', Object.keys(mapping).length);
