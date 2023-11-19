function calPoints(operations: string[]): number {
  let record = new Array()<number>;
  let sum = 0;

  for (let i = 0; i < operations.length; i++) {
    if (
      (operations[i].charCodeAt(0) >= 48 &&
        operations[i].charCodeAt(0) <= 57) ||
      operations[i].charCodeAt(0) === 45
    ) {
      record.push(+operations[i]);
    } else if (operations[i] === "C") {
      record.pop();
    } else if (operations[i] === "D") {
      record.push(2 * record[record.length - 1]);
    } else if (operations[i] === "+") {
      record.push(record[record.length - 1] + record[record.length - 2]);
    } else {
      throw Error("something went wrong");
    }
  }
  sum = record.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum;
}
