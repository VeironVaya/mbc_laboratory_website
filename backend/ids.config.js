const fs   = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, 'ids‑rules.json'), 'utf‑8');
const rules = JSON.parse(raw).map(r => ({
  id:   r.id,
  name: r.name,
  regex:new RegExp(r.regex, r.flags)
}));

const IDS_OPTIONS = {
  blockOnMatch: true,   
  logSnippetLen: 200   
};

module.exports = { rules, IDS_OPTIONS };
