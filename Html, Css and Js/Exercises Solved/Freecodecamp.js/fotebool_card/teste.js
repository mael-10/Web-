const boloDeCenoura = {
    tipoDoBolo: "cenoura",
    tipo: "doce",
    peso: "2kg",
    recheios: [
        {
            id: 0,
            recheio: "brigadeiro"
        },
        {
            id: 1,
            recheio: "chocolate"
        },
    ],
    //Objeto dentro do objeto
    test: {
        teste1: "Era uma vez",
        teste2: "Sem falar nada",
        formas: ["creme1", "creme2", "creme3"],
    }
}

const { tipoDoBolo, tipo, peso, recheio } = boloDeCenoura;
//Objeto dentro de objeto
const { teste1, teste2 } = boloDeCenoura.test;
//Irá retornar todos os ids
const fullLayer = recheio.map(recheio => recheio.id);