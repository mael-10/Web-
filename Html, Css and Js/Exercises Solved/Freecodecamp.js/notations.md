# Conceitos e Notações do JavaScript

## Tipo de dados

- **`null`** - É um valor vazio ou inexistente, indica que a variável está vazia
- **`undefined`** - Significa que não tem um valor definido, significa "sem referência"
- **`NaN`** - Um valor que pode ser convertido para boolean ou seja é um falsy value

## Manipulação de Arrays
- **`.push()`**: Adiciona um elemento ao final do array.
  - Exemplo: `let arr = [1, 2, 3]; arr.push(4); // [1, 2, 3, 4]`
- **`.pop()`**: Remove o último elemento do array e o armazena em uma variável.
  - Exemplo: `arr.pop(); // Retorna 4, e arr vira [1, 2, 3]`
- **`.shift()`**: Remove o primeiro elemento do array.
  - Exemplo: `arr.shift(); // Remove 1, e arr vira [2, 3]`
- **`.unshift()`**: Adiciona um elemento no início do array.
- Exemplo: `arr.unshift(0); // [0, 2, 3]`

## Gerar Valores Aleatórios e Manipulação de Condições
- **`Math.random()`**: Retorna um valor entre 0 e 1.
  - Exemplo: `const hit = Math.random() > 0.2 ? Math.random() : 0; // Retorna hit se maior que 0, caso contrário retorna 0.`
- **Validação Ternária**: Verifica condições de maneira sucinta.
  - Exemplo: `condição ? valor_se_verdadeiro : valor_se_falso`

## Inicialização de Variáveis
- Contadores e somas: `let count = 0;`
- Strings: `let name = "";`
- Arrays: `let items = [];`
- Valores booleanos: `let isActive = false;`
- Objetos: `let options = {};`
- Exemplo de incremento: `let cachorro = 3; cachorro += 6; // Resultado: 9`

## Const e Propiedades

A imutabilidade de const se refere apenas à reatribuição, não ao conteúdo do valor. Isso significa:

`const pessoa = { nome: "João" };`<br>
`pessoa.nome = "Maria";` // Permitido: modificando o conteúdo do objeto<br>
`pessoa = { nome: "Pedro" };` // Erro: reatribuição não permitida<br>

## Atribuição por referência:

`const a = [1, 2, 3];`<br>

`const i = a;` // 'i' referencia o mesmo array que 'a'<br>
- Use quando você quer que `i` e a compartilhem o mesmo valor.<br>
- Útil para evitar duplicação de dados na memória.<br>
- Se mudar o valor de i, muda o valor de a vice-versa.<br><br>

`const j = [...a];` // j é uma cópia do array a<br>
- Use quando você quer que i seja independente de a.<br>
- Útil para evitar efeitos colaterais, onde modificações em i não devem afetar a.<br>
- O endereço na é distintos<br>

## Method Chaining

Em JavaScript, a capacidade de combinar métodos ou funções depende do tipo de dado que você está manipulando e dos métodos disponíveis para esse tipo.

Arrays: Possuem métodos como `map`, `filter`, `reduce`, `reverse`, etc.<br>
Strings: Possuem métodos como `split`, `slice`, `replace`, `toUpperCase`, etc.<br>
Objetos: Possuem métodos como `Object.keys`, `Object.values`, `Object.entries`, etc.<br>

### Lógica Geral para Saber se uma Combinação Funciona

**Conheça o Tipo de Dados**: Antes de tentar combinar métodos, saiba qual é o tipo de dado que você está manipulando.<br>
**Conheça o Retorno de Cada Método**: Verifique o que cada método retorna. Se o método retornar um valor que não é compatível com o próximo método que você quer chamar, a combinação não funcionará.<br>
**Leia a Documentação:** A documentação oficial (como MDN) é sua melhor amiga para entender o que cada método faz e o que ele retorna.<br>

## Console.assert();

Esse método escreve a mensage no cosole se a expressão for falsa

`console.assert(x + y == 11, "Expression returned false");`

## Manipulação do DOM (Document Object Model)
- **`document.querySelector("h2")`**: Seleciona o primeiro elemento `<h2>` do documento.

### Event Listener
- Exemplo: `document.getElementById("meuBotao").addEventListener("click", function(e) { console.log(e); // Exibe informações sobre o evento de clique. });`

## Objetos em JavaScript
- É recomendado usar **`const`** para variáveis que não serão reatribuídas.
- Objetos usam propriedades para acessar valores, que consistem em `key: value`.
- Notação de ponto para propriedades sem espaços: `obj.prop`.
- Notação de colchetes para propriedades com espaços: `obj["prop com espaço"]`.
- Exemplo: `const cat = { name: "Whiskers" }; console.log(cat.name); // Whiskers`

## Funções Anônimas e Callbacks
- **Função Anônima**: Usada quando a função é única ou temporária.
  - Exemplo: `const ola = function() { console.log("Olá mundo"); }; ola();`

- **Callback**: Função passada como argumento para outra função, como `.map()` e `.sort()`.
  - Exemplo: `function love(you) { console.log("I love.. "); you(); } love(() => console.log("you"));`

- **Arrow Function**: Sintaxe simplificada para funções anônimas.
  - Exemplo: `const anonima = () => { console.log("Função com arrow function"); };`

## Encadeamento Opcional (Optional Chaining)
Permite acessar propriedades aninhadas de forma segura, evitando erros de referência.
- Exemplo: 
  - `const usuario = { nome: "João", endereco: { rua: "Avenida do Cabuloso", numero: 100, cidade: "São Paulo", CEP: "05999" }, idade: 18 }; `
  
  - `console.log(usuario.endereco?.rua); // "Avenida do Cabuloso"`

## Métodos `.map()` e `.sort()`
- **`.map()`**: Itera sobre cada elemento, criando um novo array.
  - Exemplo: `const array1 = [1, 4, 9, 16]; const map1 = array1.map(x => x * 2); console.log(map1); // [2, 8, 18, 32]`

- **`.sort()`**: Ordena os elementos de um array em ordem alfabética ou numérica, podendo incluir uma função de comparação.
  - Exemplo: `const fruits = [{ name: "Apples", price: 0.99 }, { name: "Blueberries", price: 1.49 }, { name: "Grapes", price: 2.99 }]; fruits.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);`

## Métodos `.every()`, `.some()`, `.find()`, `.includes()` e `.filter()`
- **`.every()`**: Todos os elementos passam pelo teste.
  - Exemplo: `[1, 2, 3].every(num => num < 5); // true`

- **`.some()`**: Pelo menos um elemento passa pelo teste.
  - Exemplo: `[1, 2, 3].some(num => num === 2); // true`

- **`.find()`**: Retorna o primeiro elemento que passa pelo teste.
  - Exemplo: `[10, 20, 30].find(num => num > 25); // 30`
  
- **`.includes()`**: Verifica se um elemento específico existe no array.
  - Exemplo: `[1, 2, 3].includes(2); // true`

- **`.filter()`**: Filtra os elementos que são passados como parâmetros (retorna os elementos filtrados).
  - Exemplo: `[1, 3, 5, 10, 15, 12, 89].find(num => num%2 === 0) //[10,12]` <br><br>


Quando se usa o {} nessas funções, é necessário que tenha um valor de retorno pois é uma função e
quando você usado {} em uma arrow function, você está dizendo explicitamente ao JavaScript:*

  *"Eu vou escrever um bloco de código completo, e não apenas uma única expressão."*

Por isso, o JavaScript não pode assumir automaticamente o que deve ser retornado desse bloco. Ele espera que você use return para deixar claro qual valor deseja retornar.

Quando tem apenas uma única linha acontece o **retorno ímplicito**

## Métodos de Áudio
- **`audio.play()`**: Inicia a reprodução.
- **`audio.pause()`**: Pausa a reprodução.
- **`audio.src`**: Define o caminho do arquivo.
- **`audio.currentTime`**: Define o tempo atual do áudio.

## Guard Clauses
São condições iniciais verificadas antes de executar o código principal.
- Exemplo: `let a = 1; let b = 2;` 
`if (!a || b === 1) return; // Se a for falso ou b for 1, retorna sem executar o restante. console.log(a);`

## .charAt()
Retorna o caractere de uma string em uma posição específica.
- Exemplo: `const fruit = "avocado"; const charFruit = fruit.charAt(1); //v`

## parSet() vs Number()

Number() apenas aceita "digit strings", like: `"21", "25", "43"`<br>

parseInt() aceita strings que tem ou não tem non-digit caracteres no final de uma string.
For example: "34","34foo" e "34foo" que em todos os casos vão retornar o número.

## Slice(), Slipt(), Splice()

  - **`Split`**   
      Split é uma função que *divide* a string em um array de subtring. O Split não muda o array de strings original pois
      irá retornar um novo array. Ou seja, primeiro ela cria um array de string, então o divide.

    - Exemplo: 

      ![Imagem Variável Split](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fr525ecv5gj6ae7b6jeji.png)

      ![Valor de retorno Split](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Frh2qnjrhas7ezpubnej8.png)

  - **`Slice`**   
      O Slice método não muda o array original, é um método tanto usando em strings e arrays. Basicamente o slice *fatia*.
      O Slice tem dois argumentos, um é opcional que representa o inicio e outro não é opcional que representa o fim.

    - Exemplo:

      ![Slice Váriável](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F35dm30ry5q6d4kzfbdg3.png)

      ![Valor de retorno Slice](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fwqhebpdx4ze238t2f7mw.png)

  - **`Splice`**  
      O Splice (*Emenda*) método ele muda o array original. Pode remover elementos, substituir elementos existentes ou adicionar novos elementos ao array. Pode ter no maximo três argumentos. Terceiro e o segundo é opcional.

      - O Primeiro argumento é o index (do array) e é obrigatóriamente e requirido.
      - O Segundo é opcional, que representa o número de array a ser removido
      - Terceiro é opcional e representa o número de items a ser adicinado. Nesse caso, é uma string representando os items a ser adicionado
    
    - Exemplo 1:

      ![Splice Váriável](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F0g2sms5wcf7nuggufei4.png)

      ![Valor de retorno Splice](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fi5t340tcq4ntdztg8cdy.png)

    - Exemplo 2: 

      ![Splice Váriável](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fbqw2xvoigidz0koyenq3.png)

      ![Valor de retorno Splice](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F4qthp4d2wc5tj0tf630f.png)

### Conclusão
***Split() método é usado para string transforma-lá em array. Já o Slice() pode ser usado tanto em strings e arrays. E o Splice() é usado somente para arrays***

## JSON.stringfy()
Para adicionar um array no nodeList tem que usar o JSON.stringfy(), pois ao adicionar no NodeList, é tranformado em um array.
O JSON.Stringfy adiciona o array transformando em string de maneira correta.

`const arrayCar = ["Cross Fox"];`<br>
`localStorage.setItem('arrayCar', JSON.stringfy(arrayCar));`

Quando se usa o `JSON.strinfy()`, o array é convetido em JSON, pois esse tipo de arquivo é extremamaente leve <br>
para armazenar dados.

`const tasks = [{ id: 1, name: "Comprar pão" }, { id: 2, name: "Estudar JavaScript" }];`<br>
`const tasksJSON = JSON.stringify(tasks);`<br>
`console.log(tasksJSON); // '[{"id":1,"name":"Comprar pão"},{"id":2,"name":"Estudar JavaScript"}]'`<br>

### String Simples:<br>
`Exemplo: 'oi', '123', 'true'.`<br>
São armazenadas diretamente no localStorage sem conversão.<br>

### JSON:<br>
`Exemplo: '{"name":"João","age":30}', '[1, 2, 3]'.`<br>
É uma string formatada que representa um objeto ou array. Para armazenar objetos ou arrays, você precisa usar JSON.<br> stringify.<br>

## JSON.parse()

O JSON.parse é utilizado para converter uma string JSON (que é o formato em que os dados são armazenados no localStorage) de volta para um objeto ou array JavaScript.

`JSON.parse(localStorage.getItem('allTasksData')) || [];`

## toSorted()

Foi adicionado no **ES2023**. É uma maneira segura de ordenar um array sem alterar o array orginal. 
Basicamente cria um cópia, só que cria uma cópia do array alterado.

`const months = ["Jan", "Feb", "Mar", "Apr"];`<br>
`const sorted = months.toSorted();`<br>
`console.log(sorted);` ***//Apr, Feb, Jan, Mar*** <br>

## try...catch
***É uma estrutura usada em JavaScript para capturar e tratar erros quando algo dá errado em uma parte do código***

`try` - Nessa parte, onde é colocado o código que quer testar ou executar. O js roda esse código<br>
mas se retornar algum erro na execução nesse código, como dados inesperados, o try é<br> 
interrompido imediatamente para executar o catch.<br>

`catch` - Este bloco só é executado se ocorrer um erro no bloco try. <br> 
O erro que causou o problema é passado para o catch, que permite capturar detalhes sobre ele.

`finally` - Este bloco é executado sempre, independentemente de um erro ter ocorrido ou não.<br> 
Ele é útil para colocar comandos que devem ser executados no final, como uma mensagem de "todos os testes concluídos"<br> 
ou liberar algum recurso, como um arquivo aberto.

`try {`<br>
    `result = subtrair("texto", 3);`<br>
    `console.assert(false, "Erro esperado ao subtrair texto de número, mas nenhum erro foi lançado");`<br>
`}`<br>

- Aqui, você está tentando chamar a função subtrair("texto", 3), que provavelmente espera dois números para subtrair.

- Como "texto" não é um número, espera-se que ocorra um erro de tipo.

- A linha console.assert(false, "Erro esperado...") seria um teste manual para garantir que o erro ocorra.<br> Se o erro não acontecer, essa linha gera um aviso dizendo que você esperava um erro, mas ele não ocorreu.<br><br>

`catch(e) {`<br>
    `console.assert(e instanceof TypeError, "Erro: esperado um TypeError");`<br>
`}`<br>

- Se um erro for lançado no bloco `try`, ele será capturado aqui.<br>
- A variável e representa o erro lançado.<br><br>

## TypeError, instanceof, e "e"

`TypeError`: Esse é um tipo específico de erro em JavaScript que ocorre quando se tenta usar um valor de tipo<br> 
incorreto em uma operação, como usar uma string onde se esperava um número.<br>

`instanceof`: O instanceof é um operador usado para verificar se uma variável pertence<br> a uma determinada classe ou tipo de erro. 
Aqui, e instanceof TypeError verifica se o erro capturado (e) é do tipo TypeError<br>

`e`: e contém as informações sobre o erro lançado.<br> 
É comum dar um nome genérico, como e ou error, para essa variável.

`console.assert(e instanceof TypeError, "Erro: esperado um TypeError");` verifica se o erro capturado<br> 
é realmente do tipo TypeError. Se não for, exibe uma mensagem de erro personalizada dizendo "Erro: esperado um TypeError".<br><br>

## indexOf()

O **indexOf() retorna o o index passado da posição do array passado

`const animals = ["dog", "cat", "horse"];`<br>
`animals.indexOf("cat");`<br>

## .teste() vs.match()

Em validação no regex, o .teste() verifica o regex passado como parâmetro é verdadeiro ou falso, isso significa <br>
Ou seja, vai retornar true ou falso

O .match irá retornar um array com os atributos.

Quando o .match, falha é retornado null.

## replace()

O replace é usado que, quando um texto bater com o parâmetos de regex dentro dele, irá substituir por outro texto

`<p id="demo">Mr Blue has a blue house and a blue car.`</p><br>

`let text = "Mr Blue has a blue house and a blue car";`<br>
`let result = text.replace(/blue/g, "red");`<br>

`document.getElementById("demo").innerHTML = res;`<br><br>

`<p id="demo">Mr Blue has a blue house and a blue car.`</p>


## removeAttribute()

O **removeAttribute()** atribute do html com o mesmo nome usando Js remove

`<div id="div1" disabled width="200px">`<br>
`document.getElementById("div1").removeAttribute("disabled");` <br>
`<div id="div1" width="200px">`<br>

## reverse()

O reverse é uma maneira de inverter o array

`const fruits = ["Banana", "Orange", "Apple", "Mango"];`
`fruits.reverse();`
`console.log(fruits); //["Mango", "Orange", "Apple", "Banana"];`

## Como fazer um random array

Uma das maneiras de fazer um **random array** de items seria subtrair 0.5 da função Math.random(), <br>
Onde irá ter números positivos e negativos, fazendo com que o array fique aleatório.<br><br>

`const names = ["Tom", "Jessica", "Quincy", "Naomi"];`<br>
`names.sort(() => Math.random() - 0.5);`<br>

## Diferenças entre **resetButton.id** e **resetButton.ariaLabel** e **setAtributted**

Quando se quer criar um id, classe ou arial-label é mais comudo usar propiedades do DOM <br>

`resetButton.id = "reset";` <br>
`resetButton.ariaLabel = "Reset playlist";` <br>

Para elementos personalizados, usa-se setAttribute: <br><br>

`resetButton.setAttribute("btn", "btn-click")` <br>

## appendChild(), createElement(), createTextNode();

### appendChild() <br> 

Permite adicionar um nó ou elemento como filho de outro elemento.  <br>
No exemplo abaixo, o texto “Clique em mim” seria anexado ao botão: <br><br>

`const parentElement = document.createElement("button");`<br>
`const parentElementText = document.createTextNode("Click me");`<br>

// attach the text "Click me" to the button
`parentElement.appendChild(parentElementText);`<br><br>

OU <br><br>

`const div = document.createElement("div");` <br>
`const button = document.createElement("div");` <br>
`const div.appendChild(button);`<br><br>

`console.log(div);` //`<div><button><button><div>`

### createElement()

Essa função cria um elemento, como p, button, span, div e etc.<br><br>

`const teste = document.createElement('div');` <br>
`console.log(teste);` //`<button><button>`

###  createTextNode()

Cria um texto dentro do elemento <br><br>

`const text = "um texto realmente aleatório";`<br>
`const button = document.getElementById('btn');`<br>
`button.createTextNode(text);`<br>
`console.log(button); //<button>um texto realmente aleatório<button>`<br>

## classList()

O classList, é possível remover e colocar atributos em uma classe. Existe o add, remove e o toggle.
Quando clicado, se tem o atributo da classe é retirado. Se não tem é colado.

`const list = element.classList;`<br>
`list.toggle("myStyle");`<br>

## New

1- Um dos usos do New, é um cria Built Constructor, como: <br>
- New Date();<br>
- New Array();<br>
- New Object();<br>
- New Strings();<br>
É uma maneira de criar objetos com funções perdeterminadas, diminuindo a quantidade de código.<br>

**A primeira letra das funções depois do new, tem que começar com letra maiúscula**<br>

## Destructuring Assignment Syntax

É uma maneira de desembalar as propiedades dos objetos e colocar em uma variável. Como:

`person = {`<br>
`  firstName: "João",`<br>
`  LastName: "Luktis",`<br>
`}`<br>

`const {firstName, LastName} = person;`<br>
`console.log(firstName)` //João<br><br>

É uma maneira mais facilitada de acessar objetos, o que reduz o número de linhas e deixa o código menos verboso<br>

# Conceitos mais Avançados no Js

## Validação Ternária Dentro de um Array
É possível fazer uma validação ternária para definir a posição de um elemento em um array.

**`const a = 0;`**
**`const array = ["arroz", "feijão", "salada"];`**
**`const finalResult = array[a === 1 ? 1 : 0];`**

## Mudar o NodeList

O NodeList é uma coleção estática, isso significa que não é possível incrementar valores ou substituir com métodos 
convencionais de manipulação de array

**`Nodelist[index] = 'A'`**

Isso não é possível fazer, pois o nodeList é uma coleção estática. Não tem a mesma mutabilidade de um array.
Para mudar tem que usar o `replaceWith` e modificar a posição específica.

  `// Seleciona todos os parágrafos dentro de uma div com a classe "container"`<br>
`const paragraphs = document.querySelectorAll('.container p');`<br>

`// Itera sobre o NodeList e substitui cada parágrafo por um novo elemento`<br>
`paragraphs.forEach(paragraph => {`<br>
    `const newElement = document.createElement('p');`<br><br>
    `newElement.textContent = 'Este é um novo parágrafo substituído!';`<br>
    `paragraph.replaceWith(newElement);`<br>
`});`<br>



## Teste unitário os 4 estágios

1 - Preparação: Prepare um ambiente e os dados necessários para o teste<br>
2 - Execução: Execute a função que está sendo testada com os parâmetros de entrada<br>
3 - Verificação: Verifique se a saída é esperada mesmo com inesperados<br>
4 - Limpeza: (Opcional) Restabeleça o estado original do ambiente, se necessário<br>