/*let prime_number = prompt("Enter integer number greater than 1 to check either it is prime or not");
while (Number(prime_number) <= 1 || (Number(prime_number) % 1) != 0 )  
{
    prime_number = prompt("Number has to be integer and more than 1! Try again!");
    
}
let i = 2; 
while (i < Number(prime_number) && Number(prime_number) % i != 0) 
{
    i++;
}
if (i == Number(prime_number)) 
{
    alert(`${prime_number} is prime numer`);
}
else 
{
    alert(`${prime_number} is not prime numer`);
}
*/

console.info("Function NumIsPrime() checks either number is prime or not. Example: NumIsPrime(11) -> true")
function NumIsPrime(num)
{
    if (num <=1)
        return false;
    for (let i = 2; i < num; i++) 
    {
        if (num % i == 0)
            return false;
    }
    return true;
}

