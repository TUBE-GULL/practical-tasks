//Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

console.log('Task №1');

let a = 0;
let b = 0;

for (let i = 1; i < 1000; i++) {
   if (i % 3 == 0 || i % 5 == 0) {
      a = i
      b = b + a
      console.log(` b = ${b}`)
   }

}
