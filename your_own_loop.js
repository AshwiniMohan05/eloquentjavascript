function loop(start, test, update, body) {
    for (let x = start; test(x); x = update(x)) {
      body(x);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);