const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
    let hexc= '#';
    for(let i =0;i<6;i++)
    hexc+=hex[getRandomNumber()];
    color.textContent=hexc;
    document.body.style.backgroundColor=hexc;
});

function getRandomNumber()
{
    return Math.floor(Math.random()*hex.length);
}