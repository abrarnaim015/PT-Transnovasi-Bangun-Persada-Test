// 1. Apa itu “Event Emmitter”? dan tuliskan contoh code nya.
// jawaban no 1 "Apa itu “Event Emmitter”? dan tuliskan contoh code nya."
const EventEmitter = require("events");

// Membuat instance EventEmitter
const myEmitter = new EventEmitter();

myEmitter.on("greeting", (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.on("sapa", (name) => {
  console.log(`Hello, ${name}!`);
});

// sama seperti switch case tp EventEmitter
// dan like a function yang mempunyai alamat sendiri agar jelas di panggil yang mana
// tidak terlalu mirip tapi dari konsep hampir tp harus di bikin ulang logicnya
const callMe = (key, name) => {
  switch (key) {
    case "sapa":
      console.log(`Hello, ${name}!, << from switch`);
      break;
    case "greeting":
      console.log(`Hello, ${name}!, << from switch`);
      break;
    default:
      break;
  }
};

// memanggil event "greeting" and "sapa"
myEmitter.emit("greeting", "John");
myEmitter.emit("sapa", "naim");
callMe("sapa", "naim");

// 2. Tulis ulang promise-based Node.js ke async/await. Code:

function functionA() {
  return new Promise((resolve, _) => {
    resolve("hello world");
  });
}
function functionB(value) {
  return value + " -From B";
}
function functionC(value) {
  return value + " -From C";
}
function functionD(value) {
  return value + " -From D";
}
function asyncTask1() {
  return functionA()
    .then((valueA) => functionB(valueA))
    .then((valueB) => functionC(valueB))
    .then((valueC) => functionD(valueC))
    .then((result) => console.log(result, "< 1"))
    .catch((err) => {
      logger.error(err);
    });
}

async function asyncTask2() {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionC(valueB);
    const result = await functionD(valueC);
    console.log(result, "< 2");
  } catch (err) {
    logger.error(err);
  }
}

asyncTask1();
asyncTask2();
