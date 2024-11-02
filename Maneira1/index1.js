function Total(vitoria, derrota){
    return vitoria - derrota
}
let ProcPartd = Total(152, 15) 
if ( ProcPartd < 10 ) {
    nivel = "Ferro"
 }
 else if (ProcPartd <= 20){
     nivel = "bronze"
 }
 else if(ProcPartd <= 50){
     nivel = "prata"
 }
 else if(ProcPartd <= 80){
     nivel = "Ouro"
 }
 else if(ProcPartd <= 90){
     nivel = "Diamante"
 }
 else if(ProcPartd <= 100){
     nivel = "Lendário"
 }
 else (ProcPartd => 100) 
     nivel = "Imortal"

 console.log("O héroi tem um saldo de " + ProcPartd + ", e está no nível " + nivel)