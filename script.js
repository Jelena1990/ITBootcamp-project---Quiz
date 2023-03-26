let pitanje = {
  tekst: "What is the biggest fish in the ocean?",
  odgovori: ["stingray", "whale shark", "shark"],
  indexKorektnogOdgovora: 1,
};
let pitanje1 = {
  tekst: "What is the most common blood type in the world?",
  odgovori: ["zero", "A", "B"],
  indexKorektnogOdgovora: 0,
};

let pitanje2 = {
  tekst: "From which planet is Superman?",
  odgovori: ["Krypton", "Jupiter", "Earth"],
  indexKorektnogOdgovora: 0,
};
let pitanje3 = {
  tekst: "How many bones does the human body have in total?",
  odgovori: ["351", "206", "402"],
  indexKorektnogOdgovora: 1,
};
let pitanje4 = {
  tekst: "What is the percentage of the left-handed people in the world?",
  odgovori: ["5", "10", "25"],
  indexKorektnogOdgovora: 1,
};
let pitanje5 = {
  tekst: "When was Nikola Tesla born?",
  odgovori: ["1856", "1880", "1955"],
  indexKorektnogOdgovora: 0,
};
let pitanje6 = {
  tekst: "According to Dante, who is in the ninth circle of hell?",
  odgovori: ["Cheaters", "Traitors", "Drunkards"],
  indexKorektnogOdgovora: 1,
};
let pitanje7 = {
  tekst: "At what age did the famous composer Wolfgang Amadeus Mozart die?",
  odgovori: ["38", "29", "35"],
  indexKorektnogOdgovora: 2,
};
let pitanje8 = {
  tekst: "Where is volcano Etna?",
  odgovori: ["In Greece", "In Spain", "In Italy"],
  indexKorektnogOdgovora: 2,
};
let pitanje9 = {
  tekst: "How many days does the average person spend sleeping in a year?",
  odgovori: ["105", "160", "122"],
  indexKorektnogOdgovora: 2,
};

let niz = [
  pitanje,
  pitanje1,
  pitanje2,
  pitanje3,
  pitanje4,
  pitanje5,
  pitanje6,
  pitanje7,
  pitanje8,
  pitanje9,
];

let randomNiz = niz.sort((a, b) => 0.5 - Math.random());
randomNiz = randomNiz.slice(0, 6);

for (let i = 1; i < randomNiz.length; i = i + 1) {
  document.getElementById(i).innerHTML =
    "<p>" +
    i +
    "." +
    " " +
    randomNiz[i].tekst +
    "</p>" +
    '<input type="radio"  id="myRadio' +
    i +
    '"    name="pit' +
    i +
    '"    value="0" checked>' +
    randomNiz[i].odgovori[0] +
    " <br>" +
    '<input type="radio"  id="myRadio1' +
    i +
    '"   name="pit' +
    i +
    '"    value="1">' +
    randomNiz[i].odgovori[1] +
    " <br>" +
    '<input type="radio"  id="myRadio2' +
    i +
    '"   name="pit' +
    i +
    '"    value="2">' +
    randomNiz[i].odgovori[2] +
    "<br>" +
    '<input type="hidden"    name="indextacanodgovor' +
    i +
    '" value ="' +
    randomNiz[i].indexKorektnogOdgovora +
    '">';
}

let btnPosalji = document.querySelector("#posalji");
let brojacTacno = 0;
let brojacNetacno = 0;

btnPosalji.addEventListener("click", () => {
  let odgovor1 = document.querySelector('input[name="pit1"]:checked').value;
  let tacanodgovor1 = document.querySelector(
    'input[name="indextacanodgovor1"]'
  ).value;
  if (odgovor1 == tacanodgovor1) {
    brojacTacno = brojacTacno + 1;
    document.getElementById("resenje1").innerHTML =
      '<p style="color:#8ce99a">You answered the 1st question correctly</p>';
  } else {
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje1").innerHTML =
      '<p style="color:#ff6b6b">You did not answer the 1st question correctly</p>';
  }

  let odgovor2 = document.querySelector('input[name="pit2"]:checked').value;
  let tacanodgovor2 = document.querySelector(
    'input[name="indextacanodgovor2"]'
  ).value;
  if (odgovor2 == tacanodgovor2) {
    brojacTacno = brojacTacno + 1;
    document.getElementById("resenje2").innerHTML =
      '<p style="color:#8ce99a">You answered the 2nd question correctly</p>';
  } else {
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje2").innerHTML =
      '<p style="color:#ff6b6b">You did not answer the 2nd question correctly</p>';
  }

  let odgovor3 = document.querySelector('input[name="pit3"]:checked').value;
  let tacanodgovor3 = document.querySelector(
    'input[name="indextacanodgovor3"]'
  ).value;
  if (odgovor3 == tacanodgovor3) {
    brojacTacno = brojacTacno + 1;
    document.getElementById("resenje3").innerHTML =
      '<p style="color:#8ce99a">You answered the 3rd question correctly</p>';
  } else {
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje3").innerHTML =
      '<p style="color:#ff6b6b">You did not answer the 3rd question correctly</p>';
  }

  let odgovor4 = document.querySelector('input[name="pit4"]:checked').value;
  let tacanodgovor4 = document.querySelector(
    'input[name="indextacanodgovor4"]'
  ).value;
  if (odgovor4 == tacanodgovor4) {
    brojacTacno = brojacTacno + 1;
    document.getElementById("resenje4").innerHTML =
      '<p style="color:#8ce99a">You answered the 4th question correctly</p>';
  } else {
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje4").innerHTML =
      '<p style="color:#ff6b6b">You did not answer the 4th question correctly</p>';
  }

  let odgovor5 = document.querySelector('input[name="pit5"]:checked').value;
  let tacanodgovor5 = document.querySelector(
    'input[name="indextacanodgovor5"]'
  ).value;
  if (odgovor5 == tacanodgovor5) {
    brojacTacno = brojacTacno + 1;
    document.getElementById("resenje5").innerHTML =
      '<p style="color:#8ce99a">You answered the 5th question correctly</p>';
  } else {
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje5").innerHTML =
      '<p style="color:#ff6b6b">You did not answer the 5th question correctly</p>';
  }
  document.getElementById("tacnih").innerHTML =
    '<p style="color:#339af0"> You gave: ' +
    brojacTacno +
    " right answers.</p>";
  document.getElementById("netacnih").innerHTML =
    '<p style="color:#f06595">You gave:  ' +
    brojacNetacno +
    " wrong answers.</p>";

  for (let i = 1; i < randomNiz.length; i = i + 1) {
    document.getElementById("myRadio" + i + "").disabled = true;
    document.getElementById("myRadio1" + i + "").disabled = true;
    document.getElementById("myRadio2" + i + "").disabled = true;
  }
});
