/* 
# PROBLEMA

Como desenvolvedor sênior da Cubos Game, empresa da Cubos Academy destinada a fazer 
jogos eletrônicos para computadores, você ficou responsável por implementar a lógica
que mostre ao jogador do "Enfrentando Bugs", novo jogo da empresa, se ele pode ou não
entrar na sala do chefão da fase em que ele se encontra no jogo.

Para ter o direito de enfrentar o chefão, o jogador deve ter coletado três itens específicos
ao longo da fase, que variam de chefão para chefão.

# ENTRADA

A entrada do seu programa será composta por quatro variáveis:

- `itensColetados`: *array* de *strings* em que cada posição indica um item coletado ao longo da fase;
- `itemNecessario1`: uma *string* que indica o primeiro item necessário para enfrentar o chefão;
- `itemNecessario2`: uma *string* que indica o segundo item necessário para enfrentar o chefão;
- `itemNecessario3`: uma *string* que indica o terceiro item necessário para enfrentar o chefão.

# SAÍDA

Você deve retornar:

- `PODE ENFRENTAR`: caso o jogador tenha os três itens necessários para enfrentar o chefão;
- `NAO PODE ENFRENTAR`: caso o jogador não tenha os três itens necessários para enfrentar o chefão.

------ EXEMPLO ------

## ENTRADA:

`itensColetados` = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

`itemNecessario1` = "machado"

`itemNecessario2` = "espada"

`itemNecessario3` = "sapato"

## SAIDA:

*NAO PODE ENFRENTAR*

------ EXPLICAÇÃO ------

Apesar do jogador ter conseguido coletar dois itens necessários, o machado e o sapato,
ele não conseguiu obter a espada. 

*/

//50% certo
/*  
function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
 
  let encontrouItem1 = false;
  let encontrouItem2 = false;
  let encontrouItem3 = false;

  for (let item = 0; item < itensColetados.length; item++) {
    if (itensColetados[item] === itemNecessario1) {
      encontrouItem1 = true;
    } else if (itensColetados[item] === itemNecessario2) {
      encontrouItem2 = true;
    } else if (itensColetados[item] === itemNecessario3) {
      encontrouItem3 = true;
    }

    if (encontrouItem1 && encontrouItem2 && encontrouItem3) {
      return "PODE ENFRENTAR";
    }else{
      return "NAO PODE ENFRENTAR";
    }
  }
} */


//Metodo utilizado includes: 
/* O método includes() retorna true se uma string contiver
uma string especificada. Caso contrário, retorna false. */

//TESTE DE CONSOLE:
const itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"];
const itemNecessario1 = "capa";
const itemNecessario2 = "escudo";
const itemNecessario3 = "arco"; //pode enfrentar
//const itemNecessario3 = ""; não pode enfrentar
/* const itemNecessario3 = "espada"; //não pode enfrentar */

// Verificando se todos os itens necessários estão na lista de itens coletados
const possuiItem1 = itensColetados.includes(itemNecessario1);
const possuiItem2 = itensColetados.includes(itemNecessario2);
const possuiItem3 = itensColetados.includes(itemNecessario3);

// Verificando se pode enfrentar ou não
if (possuiItem1 && possuiItem2 && possuiItem3) {
  console.log("PODE ENFRENTAR");
} else {
  console.log("NAO PODE ENFRENTAR");
}

//FUNÇÃO ENVIADA:
/* function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    if (
      itensColetados.includes(itemNecessario1) &&
      itensColetados.includes(itemNecessario2) &&
      itensColetados.includes(itemNecessario3)
    ) {
      return "PODE ENFRENTAR";
    } else {
      return "NAO PODE ENFRENTAR";
    }
} */

