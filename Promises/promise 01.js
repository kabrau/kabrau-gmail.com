
console.log("Inicio");

var processos = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("leituraClientes");
        resolve("resolvido");
        //reject("Deu erro");
    }, 1000);

}).then((dados) => {
    console.log(dados);

}).catch((erro) => {
    console.error(erro);
});

