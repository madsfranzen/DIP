

export {add, subtract}

function add(x,y) {
  if (x<0) {
    return -x+y;
  }
  return x + y
}

function subtract(x,y) {
  return x - y
}
