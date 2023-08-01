/* 
# PROBLEMA:

Segundo o Instituto de Astronomia, Geofísica e Ciências Atmosféricas (IAG) da Universidade
de São Paulo (USP), a atmosfera, camada de gás que envolve nosso planeta,
é constituída de cinco camadas: troposfera, estratosfera, mesosfera, termosfera e exosfera.
O ar se torna mais rarefeito ("menos ar") quanto mais distante da superfície terrestre. 
É por isso que os alpinistas normalmente levam oxigênio com eles quando escalam altas montanhas
(começa a "faltar" ar para a respiração). A troposfera é a única camada em que os seres vivos
podem respirar normalmente.

As cinco camadas, separadas pela distância da superfície da Terra são:

- **Troposfera**: essa camada se estende até 20 km do solo;
- **Estratosfera**: a estratosfera chega a 50 km do solo;
- **Mesosfera**: o topo da mesosfera fica a 80 km do solo;
- **Termosfera**: o topo da termosfera fica a 450 km acima da Terra;
- **Exosfera**: a camada superior da atmosfera fica a 900 km acima da Terra.

Você, como funcionário da Administração Nacional da Aeronáutica e Espaço do Estados Unidos,
NASA, deve criar um programa que, dada a leitura de um sensor que mostra a quantos quilômetros
do solo uma nave está, indique aos astronautas em qual camada da atmosfera eles estão. 
Uma camada começa assim que a outra termina.

# ENTRADA:

A entrada do seu programa será composta por uma variável do tipo *number* chamada `altitude`
que indica a quantos quilômetros do solo a nave está.

# SAÍDA:

Seu programa deve retornar:

- `TROPOSFERA`: caso a nave esteja na troposfera;
- `ESTRATOSFERA`: caso a nave esteja na estratosfera;
- `MESOSFERA`: caso a nave esteja na mesosfera;
- `TERMOSFERA`: caso a nave esteja na termosfera;
- `EXOSFERA`: caso a nave esteja na exosfera;

------ EXEMPLO ------

## ENTRADA 1:

`altitude` = 85

## SAIDA 1:

*TERMOSFERA*

------ EXPLICAÇÃO 1 ------

A termosfera começa após o quilômetro 80 e vai até o quilômetro 450.

## ENTRADA 2: 

`altitude` = 15

## SAIDA 2:

*TROPOSFERA*

------ EXPLICAÇÃO 2 ------

A troposfera se estende até 20 km do solo.

*/


/* 

//TESTE CONSOLE:
let altitude = 0;
let altitude = 50;
let altitude = 80;
let altitude = 450; */
let altitude = 500;

if (altitude <= 20) {
    console.log("TROPOSFERA")
  } else if (altitude <= 50) {
    console.log("ESTRATOSFERA")
  } else if (altitude <= 80) {
    console.log( "MESOSFERA")
  } else if (altitude <= 450) {
    console.log("TERMOSFERA")
  } else {
    console.log("EXOSFERA")
  }

//FUNÇÃO ENVIADA:
/* function solucao(altitude) {
    if (altitude <= 20) {
      return "TROPOSFERA";
    } else if (altitude <= 50) {
      return "ESTRATOSFERA";
    } else if (altitude <= 80) {
      return "MESOSFERA";
    } else if (altitude <= 450) {
      return "TERMOSFERA";
    } else {
      return "EXOSFERA";
    }
    }
 */

