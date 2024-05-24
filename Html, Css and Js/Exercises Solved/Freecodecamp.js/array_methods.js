//push
    let test = ["azul", "verde", "rosa", "roxo"];
    console.log(test);

    test.push("amarelo"); //Push so serve para colocar no final do array.
    console.log(test); 


    test[test.length - 2] = 21 + 5; // Encontrar a posição de maneira dinâmica
    console.log(test);

//Pop 

    console.log("Veja agora a diferença")

    let popped = test.pop(); // O pop remove o último elemento do array

    console.log(popped); 
    console.log(test);