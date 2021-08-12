//minor changes
alert("Program accepts 3 numbers and displays the sign of their product.")
let a = Number(prompt("Enter 1st number"));
let b = Number(prompt("Enter 2nd number"));
let c = Number(prompt("Enter 3rd number"));

let result = a * b * c;
if (result < 0) {
    alert("The sign of product is -");
} 
else if (result > 0) {
    alert("The sign of product is +");
}
else {
    alert("The sign is neither positive nor negative because product is equal to 0");
}