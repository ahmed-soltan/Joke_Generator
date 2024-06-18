let jokeContainer=document.querySelector("p");
let btn=document.querySelector("button");
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single"
const jokeGenerator=()=>{
    jokeContainer.classList.remove("active")
    fetch(url)
    .then(data => data.json())
    .then(item=>{
        jokeContainer.textContent=`${item.joke}`;
        jokeContainer.classList.add("active")
    })
}


btn.addEventListener("click" , jokeGenerator)
