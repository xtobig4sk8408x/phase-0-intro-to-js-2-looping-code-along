function writeCards(name, event){
    let greeting = [];
    for(let i = 0; i < name.length; i++){
    greeting.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return greeting;
}

function countDown()
{
    let i = 10;
    while (i >= 0)
    {
        console.log(i--);
    }

}