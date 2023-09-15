import x from "lodash";
console.log("index.js");
console.log("edit index.js");

console.dir(x);
console.dir(global);

const a = 100;
for (let x of [1, 2, 3]) {
  console.log(x);
}
console.log(a);

console.log(x.findLast([1, 2, 3]));
