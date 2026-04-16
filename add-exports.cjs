const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (!pkg.exports) {
  pkg.exports = {};
}
pkg.exports['./styles/ui-design-system.scss'] = './styles/ui-design-system.scss';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
