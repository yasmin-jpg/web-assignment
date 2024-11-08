let heroImage = document.getElementById("hero-avatar");
let heroTitle = document.getElementById("hero-title");
let heroDescription = document.getElementById("hero-description");
let heroAttributes = document.getElementById("hero-attributes");

let heroes;
async function fetchAllHeroes() {
    let url = "https://akabab.github.io/superhero-api/api/all.json";
    try {
        let response = await fetch(url);
        heroes = await response.json();
        configureRandomHero();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

function onButtonClick() {
    configureRandomHero();
}

function configureRandomHero() {
    let randomIndex = Math.floor(Math.random() * heroes.length);
    let hero = heroes[randomIndex];

    // Устанавливаем основные данные
    heroTitle.innerText = hero.name;
    heroDescription.innerText = `First Appearance: ${hero.biography.firstAppearance}`;
    heroImage.setAttribute("src", hero.images.md);

    // Очищаем старые характеристики и добавляем новые
    heroAttributes.innerHTML = `
        <div class="hero-attribute"><strong>Gender:</strong> ${hero.appearance.gender}</div>
        <div class="hero-attribute"><strong>Race:</strong> ${hero.appearance.race}</div>
        <div class="hero-attribute"><strong>Height:</strong> ${hero.appearance.height[1]}</div>
        <div class="hero-attribute"><strong>Weight:</strong> ${hero.appearance.weight[1]}</div>
        <div class="hero-attribute"><strong>Eye Color:</strong> ${hero.appearance.eyeColor}</div>
        <div class="hero-attribute"><strong>Hair Color:</strong> ${hero.appearance.hairColor}</div>
        <div class="hero-attribute"><strong>Intelligence:</strong> ${hero.powerstats.intelligence}</div>
        <div class="hero-attribute"><strong>Strength:</strong> ${hero.powerstats.strength}</div>
        <div class="hero-attribute"><strong>Speed:</strong> ${hero.powerstats.speed}</div>
        <div class="hero-attribute"><strong>Durability:</strong> ${hero.powerstats.durability}</div>
        <div class="hero-attribute"><strong>Combat Skills:</strong> ${hero.powerstats.combat}</div>
    `;
}

window.addEventListener("load", fetchAllHeroes);
