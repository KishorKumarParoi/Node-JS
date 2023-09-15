import x from 'lodash';

console.log('index.js');
console.log('edit index.js');

console.dir(x);
console.dir(global);

const a = 100;
const arr = [1, 2, 3];
// eslint-disable-next-line no-restricted-syntax
for (const val of arr) {
    console.log(val);
}
console.log(a);

console.log(x.findLast([1, 2, 3]));

const kishor = 'I have solved issues of forced format document';
console.log(kishor);
