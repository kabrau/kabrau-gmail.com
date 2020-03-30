

var clientes = new Promise((resolve, reject) => { resolve("clientes") })
var departamentos = new Promise((resolve, reject) => { resolve("deptos") })
var equipes = new Promise((resolve, reject) => { resolve("equipes") })
var teste = new Promise((resolve, reject) => { reject("teste") })


Promise.all([clientes, departamentos, equipes, teste]).then( (values) => {
    console.log("Resultados");
    console.log(values);
}).catch((erro) => {
    console.error("ERRO", erro)
})

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise