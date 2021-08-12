let amount = prompt("Program converts amount of money you have into coins. Enter amount (for example, 1.34, 100.98 etc.)");
let remainder = Number(amount);
let coins_50, coins_20, coins_10, coins_5, coins_2, coins_1;
coins_50 = Math.trunc((remainder * 100) / 50);
remainder = (remainder * 100) % 50;
alert(remainder);
coins_20 = Math.trunc(remainder / 20);
remainder = remainder % 20;
alert(remainder);
coins_10 = Math.trunc(remainder / 10);
remainder = remainder % 10;
alert(remainder);
coins_5 = Math.trunc(remainder / 5);
remainder = remainder % 5;
alert(remainder);
coins_2 = Math.trunc(remainder / 2);
remainder = remainder % 2;
alert(remainder);
coins_1 = remainder;
alert(`The best way to convert ${amount} into coins: ${coins_50} of 50 cents, ${coins_20} of 20 cents, ${coins_10} of 10 cents, ${coins_5} of 5 cents, 
${coins_2} of 2 cents, ${coins_1} of 1 cent`)