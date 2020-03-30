console.log("Inicio");

var erro ;
//erro = true;


var leituraClientes = new Promise((resolve, reject) => {

    console.log("L01: Buscando clientes");
    dados = "CLIENTE 01; CLIENTE 02; CLIENTE 03";

    setTimeout(() => {

        if (erro)
        reject("DEU ERRO");

        console.log("Dados recebidos: ", dados);
 
        resolve(dados);
    }, 1000);

}).then((dados) => {
    console.log("");
    console.log("L02 toLower");
    console.log("Dados recebidos: ", dados);

    dados = dados.toLowerCase();
    console.log("Dados enviados: ", dados);

    return dados


}).then((dados) => {

    console.log("");
    console.log("L03 split");
    console.log("Dados recebidos: ", dados);

    dados = dados.split(";")
    console.log("Dados enviados: ", dados);

    return dados

}).then((dados) => {

    console.log("");
    console.log("Resultado Final");
    console.log("Dados recebidos: ", dados);

}).catch((erro) => {
    console.error("ERRO:", erro);
});
