const fs = require('fs');
const filePath = 'C:/Users/Ogooga/Desktop/LPs/demo/assets/css/input.css';

fs.access(filePath, fs.constants.F_OK, (err) => {
  console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
});
