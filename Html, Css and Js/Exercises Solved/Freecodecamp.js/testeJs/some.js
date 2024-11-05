import testarFuncoes from './unity_test.js'

export const somar = (a, b) => { //função anonima usa export, mesmo se for o primeiro arquivo, pois não entende que é uma função default que possa ter o nome mudado
    if (typeof a !== 'number'|| typeof b !== 'number'){
        throw new TypeError('O parâmetros devem ser números');
    }
    return a + b;
}

testarFuncoes();