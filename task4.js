
let range_begin = Number(prompt("Program will return integers in range (x, y) you specify. Enter x - beginning of range"));
let range_end = Number(prompt("Program will return integers in range (x, y) you specify. Enter y - end of range"));
let range = [];

while (range_begin >= range_end || (range_begin) % 1 != 0 ||range_end % 1 != 0 )  
{
    prime_number = prompt("Numbers have to be integers and x has to be less than y! Try again!");
    let range_begin = Number(prompt("Enter x - beginning of range"));
    let range_end = Number(prompt("Enter y - end of range"));
}

for (let i = range_begin + 1; i < range_end; i++) {
    range.push(i);    
}

alert(`[${range.toString()}]`);
