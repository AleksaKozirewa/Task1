var path = require('path'); 

module.exports = { 
entry: '/Git/Task1/script.js',
output: { 
filename: 'bundle.js', 
path: path.resolve(__dirname, 'dist') 
} 
};