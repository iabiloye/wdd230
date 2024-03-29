const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    consoletable(data.prophets);
}

getProphetData();



const consoletable = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let death = document.createElement('p');


        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birthdate.textContent = `Birth Date: ${prophet.birthdate}`;
        birthplace.textContent = `Birth Place: ${prophet.birthplace}`;
        death.textContent = `Death Date: ${prophet.death}`;

        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);


        cards.appendChild(card);
    });
};