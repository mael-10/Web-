var boneco = {
    nome: "Robozinho", 
    cor: "Azul", 

    andar: function(){
        console.log(this.nome + " Está andando"); 
    },

    falar: function(frase){
        console.log(this.nome + frase); 
    }
}

boneco.andar(); //boneco (object) node metho_function.js
boneco.falar(" está falando"); 