const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusiness);
    }) 

function displayBusiness(business) {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let member = document.createElement('p');
    let website = document.createElement('a');
    let phone = document.createElement('p');
    let picture = document.createElement('img');

    h2.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    member.textContent = `${business.membership} Member`;
    website.textContent = `${business.name} Website`;
    website.setAttribute('href', business.website);
    phone.textContent = `${business.phone}`;
    
    picture.setAttribute('src', business.image);
    picture.setAttribute('alt', business.name);
    picture.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(website);
    card.appendChild(phone);
    card.appendChild(member);

    document.querySelector('.cards').appendChild(card);
}

// Create elements to add to the document
 //console.table(jsonObject);