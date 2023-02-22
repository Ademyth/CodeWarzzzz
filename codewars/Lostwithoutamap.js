function doubleArrayValues(arr) {
    const doubledArr = arr.map(num => num * 2);
    return doubledArr;
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const doubledArray = doubleArrayValues(myArray);
  console.log(doubledArray);
  