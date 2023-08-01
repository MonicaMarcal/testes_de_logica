/* 
# PROBLEMA:

Você foi contratado pelo UFC, maior evento de artes maciais mistas (MMA) do mundo,
para desenvolver um programa que os ajude a saber se uma luta entre dois lutadores
pode ou não acontecer.

A única restrição para que uma luta aconteça é que os lutadores tenham uma diferença
máxima de peso de 5 kg.

# Entrada

A entrada do seu programa será composta por uma variável chamada `pesos`,
do tipo *array* de *number*, que armazena, respectivamente, o peso do Lutador A e do Lutador B,
ambos em quilogramas, sendo esses os lutadores analisados.

# Saída

Você deverá retornar:

- `PODEM LUTAR`: caso a diferença entre os pesos dos lutadores seja no máximo de 5 kg;
- `NAO PODEM LUTAR`: caso a diferença entre os pesos dos lutadores seja maior que 5 kg.

# Exemplo

## Entrada

`pesos` = [50, 53]

## Saída

*PODEM LUTAR*

## Explicação

O Lutador A pesa 50 kg e o Lutador B pesa 53 kg. Como a diferença entre os pesos é de 3 kg,
eles podem lutar. */

//TESTE CONSOLE:
let peso1 = 50;
let peso2 = 53;
/* let peso2 = 56; */
let somaPesos = peso1 - peso2;

if (somaPesos <= 5 && somaPesos >= -5) { //subtração dos pesos deve estar entre -5 e 5 para que a condição seja verdadeira.
    console.log("PODEM LUTAR")
  } else {
    console.log("NAO PODEM LUTAR")
  }


//FUNÇÃO ENVIADA:
/* function solucao(pesos) {
    let somaPesos = pesos[0] - pesos[1];
  
    if (somaPesos <= 5 && somaPesos >= -5) {
      return "PODEM LUTAR";
    } else {
      return "NAO PODEM LUTAR";
    }
  
}
 */