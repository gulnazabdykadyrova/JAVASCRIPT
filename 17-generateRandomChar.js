characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let generateRandomNum = () => {
  return Math.floor(Math.random() * 26);
};

function generateRandomChar() {
  return characters[generateRandomNum()];
}
for (let i = 0; i < 10; i++) console.log(generateRandomChar());
