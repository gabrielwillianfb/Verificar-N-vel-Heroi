// Variáveis
let nomeDoHeroi = ["Raid", "Twobu", "ARTgW", "DIO", "Felipe", "Deus"];
let xpDoHeroi = [2371, 6000, 7123, 8002, 9050, 99999999];

for (let i = 0; i < nomeDoHeroi.length; i++) {
  // Variáveis
  let nomeHeroi = nomeDoHeroi[i];
  let xpHeroi = xpDoHeroi[i];
  let rank = "";

  // Estrutura condional
  if (xpHeroi < 1000) {
    rank = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    rank = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    rank = "Prata";
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    rank = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    rank = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    rank = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    rank = "Imortal";
  } else if (xpHeroi >= 10001) {
    rank = "Transcendental";
  }

  // Saída
  console.log(`O Herói de nome **${nomeHeroi}** está no rank **${rank}**`);
}
