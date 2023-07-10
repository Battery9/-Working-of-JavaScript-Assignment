{
    console.log(x); // undefined
    console.log(y); // ReferenceError: y is not defined
    console.log(z); // ReferenceError: z is not defined
  
    var x = 1;
    let y = 2;
    const z = 3;
  
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
  }
  