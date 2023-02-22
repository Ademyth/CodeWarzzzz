function repeatString(n, s) {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += s;
    }
    return result;
  }
  console.log(repeatString(5, 'Wahalaaa'));