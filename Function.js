//encontro no restaurante
ChamarTodas()

function ComprarRefrigerante(nome, cocacola , valor){
    console.log(`${nome}${cocacola}${valor}`)
}

function ComprarPizza(nome, mista , valor){
    console.log(`${nome}${mista}${valor}`)
}

function ComprarHamburgue(nome, bacon , valor){
    console.log(`${nome}${bacon}${valor}`)
}

function ChamarTodas(){
    ComprarRefrigerante("A Marcela " , "vai comprar o Refrigerante da CocaCola " , "ta custando $10.00 reais")
    ComprarPizza( "O Lucas ", "vai comprar uma Pizza Mista" , " ta $65.99")
    ComprarHamburgue("A Natalia " ,"vai comprar uma Humburque de Bacon", " ta 15.50")
} 
