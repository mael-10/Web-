# Conceitos e Notações do JavaScript

## Manipulação de Arrays
- **`.push()`**: Adiciona um elemento ao final do array.
  - Exemplo: `let arr = [1, 2, 3]; arr.push(4); // [1, 2, 3, 4]`
- **`.pop()`**: Remove o último elemento do array e o armazena em uma variável.
  - Exemplo: `arr.pop(); // Retorna 4, e arr vira [1, 2, 3]`
- **`.shift()`**: Remove o primeiro elemento do array.
  - Exemplo: `arr.shift(); // Remove 1, e arr vira [2, 3]`
- **`.unshift()`**: Adiciona um elemento no início do array.
  - Exemplo: `arr.unshift(0); // [0, 2, 3]`
- **`.includes()`**: Verifica se um elemento está dentro do array.
  - Exemplo: `arr.includes(2); // Retorna true`

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

  ***Maneira Simplificada***

  -- Text here

## Métodos `.find()`, `.every()`, `.some()`, e `.includes()`
- **`.find()`**: Encontra o primeiro elemento que satisfaz a condição da função callback.
  - Exemplo: `const numbers = [10, 20, 30, 40, 50]; const foundNumber = numbers.find(num => num > 25); // Retorna 30`

- **`.every()`**: Verifica se todos os elementos atendem a uma condição.
  - Exemplo: `[1, 2, 3].every(num => num < 5); // true`

- **`.some()`**: Verifica se pelo menos um elemento atende a uma condição.
  - Exemplo: `[1, 2, 3].some(num => num === 3); // true`

- **`.includes()`**: Verifica se um array contém um elemento específico.
  - Exemplo: `[1, 2, 3].includes(2); // true`

## Métodos de Áudio
- **`audio.play()`**: Inicia a reprodução.
- **`audio.pause()`**: Pausa a reprodução.
- **`audio.src`**: Define o caminho do arquivo.
- **`audio.currentTime`**: Define o tempo atual do áudio.

## Guard Clauses
São condições iniciais verificadas antes de executar o código principal.
- Exemplo: `let a = 1; let b = 2;` 
`if (!a || b === 1) return; // Se a for falso ou b for 1, retorna sem executar o restante. console.log(a);`

## `.charAt()`
Retorna o caractere de uma string em uma posição específica.
- Exemplo: `const fruit = "avocado"; const charFruit = fruit.charAt(1);`

## parSet() vs Arram.from()

-- Text here

## Number vs Intiger

-- Text here


## Diferença entre `.every()`, `.some()`, `.find()`, e `.includes()`
- **`.every()`**: Todos os elementos passam pelo teste.
  - Exemplo: `[1, 2, 3].every(num => num < 5); // true`

- **`.some()`**: Pelo menos um elemento passa pelo teste.
  - Exemplo: `[1, 2, 3].some(num => num === 2); // true`

- **`.find()`**: Retorna o primeiro elemento que passa pelo teste.
  - Exemplo: `[10, 20, 30].find(num => num > 25); // 30`
  
- **`.includes()`**: Verifica se um elemento específico existe no array.
  - Exemplo: `[1, 2, 3].includes(2); // true`

## Slice(), Slipt(), Splice()
  - **`Split`**   O Array de string ele dividido em substrings
  - **`Slice`**   O Usado em Strings e arrays, é fatiado, para pegar partes específicas
  - **`Splice`**  O Splice ele emenda o array original, ou seja, ele cria um nove array emendando-o

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

Isso não é possível fazer, pois o nodeList é uma coleção estática. Não tem a mesma mutabilidade de um array

Para substituir tem que **criar uma novaLista usando o método replace**. Isso ajuda a manter estado atuais mantidos

  **`nodeList.replaceWith(oldTaskList[index]);`**

-  Com o replace ele apenas vai manter o estado atual (uma recuperação).
-  Ele identifica automaticamente qual posição vai ser modifica