const posts=[

{
title:"Meu primeiro projeto em Java",
link:"posts/primeiro-post.html"
},

{
title:"O que aprendi no primeiro semestre de CC",
link:"posts/post2.html"
}

]

const container=document.getElementById("posts")

posts.forEach(post=>{

container.innerHTML+=`

<div class="card">

<h3>${post.title}</h3>

<a href="${post.link}">Ler artigo →</a>

</div>

`

})