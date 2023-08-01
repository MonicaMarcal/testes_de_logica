/* 
# PROBLEMA:

Em uma reportagem de 2016, a revista Veja cita as principais características que indicam
se um animal é presa ou predador. Uma delas, segundo a revista, 
é que as presas costumam ter os olhos nos lados da cabeça, o que oferece um amplo ângulo de visão.

Martin Banks, professor de óptica da Universidade de Berkeley, diz o seguinte:

“A primeira necessidade desses animais (presas) é detectar predadores.
Por isso, desenvolveram uma visão panorâmica com poucos pontos cegos”.

Você foi contratado pelo grupo de pesquisadores que desenvolveram essa
pesquisa para criar um programa que diga se um animal é presa ou predador.

# ENTRADA:

A entrada do seu programa é composta de uma variável do tipo *booleana* 
chamada `olhosNasLaterais`, que indica se o animal analisado tem ou não olhos nas laterais da cabeça.
O valor de *true* quer dizer que o animal tem olhos nas laterais e *false* que não tem.

# SAÍDA:

Seu programa deve retornar:

- `PRESA`: se o animal tiver olhos nas laterais da cabeça;
- `PREDADOR`: se não tiver olhos nas laterais da cabeça.

------ EXEMPLO -----

## ENTRADA:

`olhosNasLaterais` = true

## SAÍDA:

*PRESA* 

*/

//TESTE CONSOLE:
let olhosNasLaterais = true;

/* if (olhosNasLaterais === true) { */
if (olhosNasLaterais === false) {
    console.log("PRESA")
  } else {
    console.log( "PREDADOR")
  }


//FUNÇÃO ENVIADA:
/* function solucao(olhosNasLaterais) {
    if (olhosNasLaterais === true) {
      return "PRESA";
    } else {
      return "PREDADOR";
    }
  
  } */