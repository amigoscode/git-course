// this function adds 2 nums
const add = (n1, n2) => n1 + n2;

const subtract = (n1, n2) => n1 - n2;

const divide = (n1, n2) => {
  if (n2 === 0) {
    throw Error("cannot devide by 0");
  }
  return n1 / n2;
}

export {
  add,
  subtract,
  divde
};
