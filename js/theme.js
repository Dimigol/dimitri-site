const toggle = document.getElementById("theme-toggle")

if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light")
}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light")

if(document.body.classList.contains("light")){
localStorage.setItem("theme","light")
toggle.innerText="☀️"
}else{
localStorage.setItem("theme","dark")
toggle.innerText="🌙"
}

})