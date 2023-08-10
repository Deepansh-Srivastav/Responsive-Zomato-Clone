let area = document.querySelectorAll('#area-name')

let areaInput = document.querySelector('#location')

let areaForm = document.querySelector('#location-input')


areaForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let val = areaInput.value
    val = val.charAt(0).toUpperCase() + val.slice(1);

    for (let i = 0; i < area.length; i++) {
        area[i].innerText = val
    }

    areaInput.value = ''

})


const accordion = document.querySelectorAll('.accordion-item')



accordion.forEach((a) => {

    const accordionHeader = a.querySelector('.accordion-header')

    const accordionBody = a.querySelector('.accordion-body')

    const image = a.querySelector('.accordion-img')

    accordionHeader.addEventListener('click', () => {
        accordionBody.classList.toggle('activate')
        accordionHeader.classList.toggle('change-border')
        image.classList.toggle('rotate')



    })


})


const countryToggleButton = document.querySelector('.country-button')
const container = document.querySelector('.country-div')


countryToggleButton.addEventListener('click',()=>{
    container.classList.toggle('active')
    languageContainer.classList.remove('language-active')
})



let countries = document.querySelectorAll('.country-info')

var information = [
    {
        flagURL: countries[0].children[0].src,
        name: countries[0].innerText
    },
    {
        flagURL: countries[1].children[0].src,
        name: countries[1].innerText
    },
    {
        flagURL: countries[2].children[0].src,
        name: countries[2].innerText
    },
    {
        flagURL: countries[3].children[0].src,
        name: countries[3].innerText
    },
    {
        flagURL: countries[4].children[0].src,
        name: countries[4].innerText
    },
    {
        flagURL: countries[5].children[0].src,
        name: countries[5].innerText
    },
    {
        flagURL: countries[6].children[0].src,
        name: countries[6].innerText
    },
    {
        flagURL: countries[7].children[0].src,
        name: countries[7].innerText
    }

]


countries.forEach((country) => {

    country.addEventListener('click', () => {

        let i = parseInt(country.dataset.value);

        countryToggleButton.children[0].src = information[i].flagURL
 
        countryToggleButton.children[1].innerText = information[i].name

        container.classList.remove('active')

    })
})



const languageToggleButton = document.querySelector('.language-button')
const languageContainer = document.querySelector('.language-div')


languageToggleButton.addEventListener('click',()=>{
    languageContainer.classList.toggle('language-active')
    container.classList.remove('active')
})