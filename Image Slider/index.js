// Functionality to next and prev buttons
let step = document.querySelectorAll(".step")
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let length = step.length
let count = 0;

next.addEventListener('click', () => {

    count++
    count = count % length;

    // Function to change Image
    changeImage(count)

    step.forEach(item => item.classList.remove('active'))
    step[count].classList.add('active')
    console.log('inside next', count)

})


prev.addEventListener('click', () => {
    if (count == 0) count = length;

    step.forEach(item => item.classList.remove('active'))
    step[--count].classList.add('active')

    // Function to change Image
    changeImage(count)
    console.log('inside prev', count)

})






// Functionality to alick on numbered steps
let step_container = document.querySelector('.steps_container')

step_container.addEventListener('click', e => {
    step.forEach(item => item.classList.remove('active'))
    count = Array.from(step).indexOf(e.target)

    if (e.target.classList.contains('step')) {
        e.target.classList.add('active')
        changeImage(count)
    }
})




// Like or Unlike
let actions = document.querySelector('.actions')
let heart = document.querySelectorAll('.heart')

actions.addEventListener('click', (e) => {
    heart.forEach(item => item.removeAttribute('id'))
    e.target.id = 'invisible'
})









// Functionality to change Image on clicking prev or next
let image_container = document.querySelector('.image_container')
let card_image = document.querySelector('.card_image')

let imageSrc = [
    './assets/The Neon Shallows (2) (5120 X 2880).jpg',
    './assets/The Neon Shallows (01).jpg',
    './assets/The Neon Shallows (02).jpg',
    './assets/The Neon Shallows (03).jpg',
]

function changeImage(count) {
    image1 = document.createElement('img')


    image1.src = imageSrc[count]
    image2 = image1.cloneNode(true)

    let src1 = image_container.firstElementChild
    let src2 = card_image.firstElementChild

    src1.replaceWith(image1)
    src2.replaceWith(image2)
}

window.onload = () => {
    step.forEach(item => item.click())
    step[0].click()
}



