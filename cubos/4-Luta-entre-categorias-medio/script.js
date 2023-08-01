/* 
# PROBLEMA:

Você, desenvolvedor sênior do UFC, maior evento de artes maciais mistas (MMA) do mundo,
deve desenvolver um programa que indique à organização do novo evento que sua empresa vai
fazer se dois lutadores podem ou não lutar.

Os lutadores serão divididos em cinco categorias:

- **Peso leve**: lutadores com peso mais leve que 55 kg;
- **Peso meio-médio**: categoria mais pesada que a anterior e com pesos mais leves que 65 kg;
- **peso médio**: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;
- **Peso meio-pesado**: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;
- **Peso pesado**: pesos maiores ou iguais a 85 kg.

A regra do evento é: os lutadores só podem lutar com lutadores da mesma categoria.

# ENTRADA:

A entrada do seu programa será composta por duas variáveis:

- `peso1`: variável numérica que armazena o peso de um dos lutadores;
- `peso2`: variável numérica que armazena o peso do outro lutador.

# SAÍDA:

Você deve retornar:

- `PODEM LUTAR`: se os lutadores forem da mesma categoria;
- `NAO PODEM LUTAR`: se os lutadores forem de categorias diferentes.

------ EXEMPLO ------

## ENTRADA 1:

`peso1` = 60

`peso2` = 64

## SAÍDA 1:

*PODEM LUTAR*

------ EXPLICAÇÃO 1 ------

Um dos lutadores pesa 60 kg e o outro pesa 64 kg. 
Como ambos são da categoria dos pesos meio-médios, eles podem lutar.

## ENTRADA 2:

`peso1` = 55

`peso2` = 54

## SAIDA 2:

*NAO PODEM LUTAR*

------ EXPLICAÇÃO 2 ------

Um dos lutadores pesa 55 kg e o outro pesa 54 kg. O primeiro lutador citado é da categoria
dos pesos meio-médios, o outro é da categoria dos pesos leves. 
Como ambos são de categorias diferentes, eles não podem lutar 

*/

//TESTE CONSOLE:
let peso1 = 60;
let peso2 = 64;
/* let peso1 = 55;
let peso2 = 54; */


if (peso1 < 55 && peso2 < 55) {
  console.log("PODEM LUTAR")
} else if (peso1 >= 55 && peso1 < 65 && peso2 >= 55 && peso2 < 65) {
  console.log( "PODEM LUTAR")
} else if (peso1 >= 65 && peso1 < 75 && peso2 >= 65 && peso2 < 75) {
  console.log( "PODEM LUTAR")
} else if (peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85) {
  console.log( "PODEM LUTAR")
} else if (peso1 >= 85 && peso2 >= 85) {
  console.log( "PODEM LUTAR")
} else {
  console.log( "NAO PODEM LUTAR")
}


//FUNÇÃO ENVIADA:
/* function solucao(peso1, peso2) {
    if (peso1 < 55 && peso2 < 55) {
      return "PODEM LUTAR";
    } else if (peso1 >= 55 && peso1 < 65 && peso2 >= 55 && peso2 < 65) {
      return "PODEM LUTAR";
    } else if (peso1 >= 65 && peso1 < 75 && peso2 >= 65 && peso2 < 75) {
      return "PODEM LUTAR";
    } else if (peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85) {
      return "PODEM LUTAR";
    } else if (peso1 >= 85 && peso2 >= 85) {
      return "PODEM LUTAR";
    } else {
      return "NAO PODEM LUTAR";
    }
} */