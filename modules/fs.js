const { error } = require('console')
const fs = require('fs')
const path = require('path')

// criar uma pasta

// fs.mkdir(path.join(__dirname, '/test'), (error) =>{
//     if(error) {
//         console.log('Erro:', error)
//     }
//     console.log("pasta criada com sucesso");
// })

// criar um arquivo

fs.writeFile(path.join(__dirname,'/test', 'test.txt'),"hello node!", (error) =>{
    if (error) {
        return console.log("Erro: ", error);
    }
    console.log('arquivo criado com sucesso')
});

// // Adicionar à um arquivo

fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello world', (error) => {
    if (error) {
      return  console.log('Erro:', error)
    }
    console.log("Arquivo modificado com sucesso")
})

// // Ler arquivo 
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error,data) =>{
    if (error) {
        return console.log('Erro:' ,error)
    }
    console.log(data)
})

