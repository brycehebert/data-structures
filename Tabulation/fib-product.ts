/**
 * Determines if the given number is a product of 2 adjacent fibonacci numbers
 * @param prod 
 * @returns Array containing the 2 numbers whose product is greater than or equal to the given number plus a boolean 
 * that is true if the given number is a product.
 */

const fibProd = (prod: number): [number, number, boolean] => {

  let x = 0;
  let y = 1;
  while (x * y < prod) {
    let z = x + y;
    x = y;
    y = z;
  }

  return [x, y, x * y === prod];
}

console.log(fibProd(714)); //[21, 34, true]
console.log(fibProd(715)); //[34, 55, false]