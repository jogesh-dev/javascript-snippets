export function subtract (a, b){
  a = parseFloat(a);
  b = parseFloat(b)
  if(isNaN(a) || isNaN(b)){
    throw new Error('Invalid input type for subtract. Number type expected');
  }
  return a - b;
}