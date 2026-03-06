const posts = [
  {
    title: "Sobre mim",
    link: "assets/sobre-mim.pdf",
    cta: "Baixar arquivo",
    download: true
  },
  // {
  //   title: "O que aprendi no primeiro semestre de CC",
  //   link: "posts/post2.html",
  //   cta: "Ler artigo ->"
  // }
];

const container = document.getElementById("posts");

posts.forEach((post) => {
  container.innerHTML += `
<div class="card">
<h3>${post.title}</h3>
<a href="${post.link}" ${post.download ? "download" : ""}>${post.cta || "Ler artigo ->"}</a>
</div>
`;
});
