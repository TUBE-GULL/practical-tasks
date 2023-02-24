//Четные числа Фибоначчи

//Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.

console.log('Task №2');

const limit = 4000000;
const arrayFibonacci = [1, 2];

const evenFibonacciN = function (limit) {
   let i = 1;
   let n = 0;

   for (; i < limit; i++) {
      let a = arrayFibonacci[arrayFibonacci.length - 2];
      let b = arrayFibonacci[arrayFibonacci.length - 1];
      i = a + b;
      arrayFibonacci.push(i);

      if (i % 2 === 0) {
         n += i;
      }
   }

   return console.log(n);
}

evenFibonacciN(limit);




