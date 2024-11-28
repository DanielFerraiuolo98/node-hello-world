console.log("Hello Boolean");
console.log(process.argv);

const parola = process.argv.slice(2);
const nome = parola[0] || "World";
console.log(`Hello ${nome}`);
