
let ar = [1, 2, 1, 1, 3, 4, 1];

let x = 0;

let newAr = []

ar.sort((a, b) => a - b)

console.log(ar);

for (let i = 0; i < ar.length; i ++) {
    if (ar[i] !== ar[x + 1]) {
        newAr.push(ar[i])
    } 
    x += 1;
}
console.log(newAr);