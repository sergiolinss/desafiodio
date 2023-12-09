//desafio dio felipão
let nomeDoHeroi = "VBK"
let nivelDoHeroi = 1000
let resultado = nivelDoHeroi
let pocaoDeNivel = 500
while(nivelDoHeroi < 10001 ){
resultado = nivelDoHeroi + pocaoDeNivel
nivelDoHeroi++

}
switch (nivelDoHeroi){
case (nivelDoHeroi <=2000):
console.log(Ferro)
break
case (nivelDoHeroi <=5000):
console.log(Bronze)
break
case (nivelDoHeroi <=7000): 
console.log(Prata)
break
case (nivelDoHeroi <=8000):
console.log(Ouro)
break
case (nivelDoHeroi <=9000):
console.log(Platina)
break
case ( nivelDoHeroi <=10000):
console.log(Ascendente)
break
case ( nivelDoHeroi >=10001):
console.log(Radiante)
break
default: 
console.log( "Nível fora do padrão")
}
console.log("O herói de nome ",  nomeDoHeroi  + " Está no nivel ", + nivelDoHeroi)