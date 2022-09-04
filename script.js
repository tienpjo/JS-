howMany = (selectObject) => {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.length; i++) {
    if (selectObject[i].selected) {
      numberSelected++;
    }
  }
  // console.log(numberSelected);
  return numberSelected;
};
const btnClick = document.getElementById("btn-click");
btnClick.addEventListener("click", () => {
  const musicType_2 = document.getElementById("musicTypes");
  document.getElementById("show").innerHTML = `You have selected ${howMany(
    musicType_2
  )} option(s).`;
  // console.log(`You have selected ${howMany(musicTypes)} option(s).`);
});
// const game = {
//   team1: "Bayern Munich",
//   team2: "Dortmund",
//   player: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Gozetka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummel",
//       "Akanji",
//       "Hakimi",
//       "Weigh",
//       "Witsel",
//       "Hazard",
//       "Brand",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4-0",
//   scored: ["Lewandowski", "Gnarby", "Muller", "Hummels"],
//   date: "Nov 9th,2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.player;
// console.log(`issue: 1.`, player1, player2);

// const [gk, ...fieldPlayer] = player1;

// console.log(`issue:2 . `, gk, fieldPlayer);

// const allPlayer = [...player1, ...player2];

// console.log(`issue:3`, allPlayer);

// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(`issue:4`, players1Final);

// const {
//   odds: { team1: BayerMunich, x: draw, team2: Dortmund },
// } = game;

// console.log(`issue 5:`, BayerMunich, draw, Dortmund);

// BayerMunich < Dortmund && console.log("BM wwin");

// const weekday = ["sunday", "tuesday", "thrisday", "friday", "sat"];
// const openHours = {
//   [weekday[3]]: {
//     open: "8h",
//     close: "17h",
//   },
//   [`weekday${3 + 4}`]: {
//     open: 0,
//     close: "12h",
//   },
// };

// const restaurant = {
//   openHours,
// };

// for (const day of weekday) {
//   console.log(restaurant.openHours[day]?.open ?? "close");
// }

// for (const x of Object.entries(openHours)) {
//   console.log(x);
// }

// console.log(Object.entries(game.scored));

// for (const x of game.scored.entries()) {
//   console.log(x);
// }

// for (const x of Object.entries(game.scored)) {
//   console.log(x);
// }

// for (const [x, playerName] of game.scored.entries()) {
//   console.log(`Goal ${x + 1}:`, playerName);
// }

// let sum = 0;
// entries = Object.entries(game.odds);

// for (const [odd, value] of entries) {
//   sum += value;
// }
// console.log(sum);
// let avg = 0;
// avg = sum / entries.length;
// console.log(`Avg:${avg}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamSrt = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(teamSrt);
// }

const mySet1 = new Set();
mySet1.add(1);
mySet1.add(2);
mySet1.add(5);
mySet1.add(5); // not add

console.log(mySet1);

const obj_1 = {
  a: 1,
  b: 1,
};

mySet1.add(obj_1);

console.log(mySet1);

console.log(mySet1.size);

const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size);
console.log(mySet2);
console.log([...mySet2]);
