//   Print pattern

/*   11111
     2222
     333
     44
     5    */









let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let k = 0; k < n - i + 1; k++) {
    string += i;
  }
  string += "\n";
}
console.log(string);
