console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogs() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {

    data.message.forEach(dogImage => {
        const imageContainer = document.querySelector('#dog-image-container')
        const img = document.createElement('img')
        img.src = dogImage
        imageContainer.appendChild(img)
    })
})
}




document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
})