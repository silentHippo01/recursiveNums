const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function findExpression(target, index, expression) {
  if (index === digits.length) {
    const result = eval(expression);
    if (result === target) {
      console.log(expression + " = " + result);
    }
    return;
  }
  findExpression(target, index + 1, expression + digits[index]);
  findExpression(target, index + 1, expression + "+" + digits[index]);
  findExpression(target, index + 1, expression + "-" + digits[index]);
}

findExpression(200, 1, "9");
