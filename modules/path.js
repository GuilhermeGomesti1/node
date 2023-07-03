const path = require('path')

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// nome do Diretorio  atual

console.log(path.dirname(__filename));

// extensao do arquivo

console.log(path.extname(__filename));

//criar um objeto Path

console.log(path.parse(__filename));

// junte varios caminhos de arquivos

console.log(path.join(__dirname, "teste", 'test.html'));