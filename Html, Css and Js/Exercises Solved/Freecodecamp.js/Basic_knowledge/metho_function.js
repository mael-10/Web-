let boneco = {
    nome: "Robozinho", 

    "sobre nome": "Tadeu", 

    cor: "Azul", 

    andar: function(){
        console.log(this.nome + " Está andando"); 
    },

    falar: function(frase){
        console.log(this.nome + frase + this.cor); 
    }

    
}

boneco.andar(); //boneco (object) node metho_function.js //tirar as credenciais do pc
boneco.falar(" está falando na cor ");
console.log(boneco["sobre nome"]); 
console.log(boneco); 