alert("Program accepts 3 integers and displays the biggest one.")
let a = Number(prompt("Enter 1st integer"));
let b = Number(prompt("Enter 2nd integer"));
let c = Number(prompt("Enter 3rd integer"));

while (a % 1 != 0 || b % 1 != 0 || c % 1 != 0)
{
    alert("At least one of numbers is wrong, i.e. not integer!");
    let a = Number(prompt("Enter 1st integer"));
    let b = Number(prompt("Enter 2nd integer"));
    let c = Number(prompt("Enter 3rd integer"));
}

let biggest = Math.max(a, b, c);
alert(`${biggest} is the biggest number`);