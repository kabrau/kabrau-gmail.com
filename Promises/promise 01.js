console.log("Inicio");

var processos = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("leituraClientes: simulação de chamada em 1 segundo");
        var dadosRetornados = "cliente JOÃO"

        resolve(dadosRetornados);
        //reject("Deu erro");
    }, 1000);

}).then((dados) => {
    console.log("then:",dados);

}).catch((erro) => {
    console.error("catch:", erro);
});

