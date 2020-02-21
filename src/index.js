// declared vars 

const dogContainer = document.getElementById('dog-image-container');
const breedContainer = document.getElementById('dog-breeds');
const dropDown = document.getElementById('breed-dropdown');
let dogBreedArray
let dogData




function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then( response => response.json() )
    .then( dogData => renderDog(dogData.message) )
    // .then(function(dogData) {
    //     console.log(dogData)
};

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then( response => response.json() )
    .then( dogBreedData => {
        renderBreed(dogBreedData.message)
        dogData = dogBreedData;
        dogBreeds = dogData["message"]
        dogBreedArray = Object.keys(dogBreeds)
    });
}

function renderDog(dogData) {
    dogData.forEach( dog => {
        const img = document.createElement('img');
        img.src = dog
        dogContainer.append(img);
        console.log(dog);
    })
}

function renderBreed(dogBreedData) {
    for (let dogBreed in dogBreedData) {
        const li = document.createElement('li')
        li.innerText = dogBreed;
        breedContainer.append(li);
    }
}

function handleBreedClick(event) {
    if (event.target.tagName === "LI") {
        event.target.style.color = "green";

    }
}

function selectLetter() {
    let letter = dropDown.value 
    let dogList = dogBreedArray.filter(breed => breed.startsWith(letter))
    let x = dogList
    breedContainer.innerText = ""
    x.forEach (dog => {
        const li = document.createElement('li');
        li.innerText = dog;
        breedContainer.append(li);
    })

}





// event listeners 

breedContainer.addEventListener('click', handleBreedClick)
dropDown.addEventListener('change', selectLetter)









//Invoked Function


fetchDogs();
fetchBreeds();
