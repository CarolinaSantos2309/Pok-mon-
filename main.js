// main.js - Versão mais simples
document.getElementById('buscar').addEventListener('click', async () => {
    const input = document.getElementById('pokemon-nome').value.trim();
    if (!input) return alert("Digite um nome ou número!");
    
    try {
        // 1. Busca na API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
        const pokemon = await response.json();

        // 2. Atualiza a página
        document.getElementById('nome').textContent = pokemon.name;
        document.getElementById('numero').textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
        document.getElementById('pic').src = pokemon.sprites.other['official-artwork'].front_default;
        
    } catch (error) {
        alert("Pokémon não encontrado! Tente novamente.");
    }
});

//fiz usando deep n entedi bulhunfas, so fiz pra deixar pronto msm pq fi so depressão msm 
// css e html e fazil agr js é uma merda prcr tem que matar quem inventou essa merda
