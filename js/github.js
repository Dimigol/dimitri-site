fetch("https://api.github.com/users/SEUUSUARIO/repos")

.then(res=>res.json())

.then(data=>{

const container=document.getElementById("repos")

data.slice(0,6).forEach(repo=>{

container.innerHTML+=`

<div class="card">

<h3>${repo.name}</h3>

<p>${repo.description || "Projeto de software"}</p>

<a href="${repo.html_url}" target="_blank">

Ver no GitHub

</a>

</div>

`

})

})