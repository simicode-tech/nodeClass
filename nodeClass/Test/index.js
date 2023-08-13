const name = "node class";

function add(p1, p2) {
  return p1 + p2;
}
function subtraction(p1, p2) {
  return p1 - p2;
}
const student = {
  name: "peter",
  greet: function (p) {
    console.log(`Welcome to ${p}`);
  },
};

module.exports = { name, add, subtraction, student };
