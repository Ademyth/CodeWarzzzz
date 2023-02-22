function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) {
      return -1;
    }
    
    var next = Math.sqrt(sq) + 1;
    while (next * next % 1 !== 0) {
      next++;
    }
    
    return next * next;
  }
  console.log(findNextSquare(121));