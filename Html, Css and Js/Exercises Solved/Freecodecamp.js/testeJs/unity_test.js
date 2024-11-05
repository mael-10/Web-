import { somar } from './some.js'

export default function testarFuncoes(){ //exporte default pode ser importado como qualquer nome
    setTimeout(() => console.log("Iniciando os testes"), 1500);
    setTimeout(() => console.log("Testando a função somar"), 2000);


    let result = somar(2, 3);
    console.assert(result === 5, `Erro: esperado 5, mas obteve ${result}`)

    result = somar(-1, 1);
    console.assert(result === 0, `Erro: esperado 5, mas obteve ${result}`);

    result = somar(0, 0);
    console.assert(result === 0, `Erro: esperado 0, mas obteve ${result}`);

    try {
        result = somar("texto", 3);
        console.assert(false, "Erro esperado ao subtrair texto de número, mas nenhum erro foi lançado");
    } catch(e) {
        console.assert(e instanceof TypeError, "Erro: esperado um TypeError");
        // Pega apenas a mensagem do erro
        console.error(e.message); // É um erro de tipo
    } finally{
        console.log("Todos os testes concluídos");
    }
}

//É possível forçar um erro com o throw new Error