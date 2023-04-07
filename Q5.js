//   Print pattern

/*   12345
     2345
     345
     45
     5    */


let num = 5;

for (let i = 1; i <= num; i++) {
    let output = "";
    for (let j = i; j <= num; j++) {
      output += j;
    }
    console.log(output);
  }