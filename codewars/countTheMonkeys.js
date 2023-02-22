function countMonkeys(n) {
    let monkeys = [];
    for (let i = 1; i <= n; i++) {
      monkeys.push(i);
    }
    return monkeys;
  }
  let n = 10;
  let monkeys = countMonkeys(n);
  console.log(monkeys);