function curry(cb) {
  return function foo(...args) {
    if (args.length >= cb.length) {
      return cb(...args);
    }

    return (...new_args) => foo(...args, ...new_args);
  };
}

const sum = (a, b, c) => a + b + c;
const fn = curry(sum);
console.log(fn(1, 2, 3)); //6
console.log(fn(1)(2, 3)); //6
console.log(fn(1, 2)(3)); //6
console.log(fn(1)(2)(3)); //6
