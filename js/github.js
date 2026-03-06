fetch("https://api.github.com/users/dimigol/repos")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("repos");

    if (!container || !Array.isArray(data)) {
      return;
    }

    data
      .filter((repo) => !repo.fork)
      .slice(0, 6)
      .forEach((repo) => {
        container.innerHTML += `
<div class="card">
  <h3>${repo.name}</h3>
  <p>${repo.description || "Projeto de software"}</p>
  <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
</div>
`;
      });
  })
  .catch(() => {
    const container = document.getElementById("repos");

    if (container) {
      container.innerHTML = '<p>Não foi possível carregar os repositórios agora.</p>';
    }
  });
