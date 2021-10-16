const billingSlider = document.getElementById('price-range')
const price = document.querySelector('.monthly-price')
const pageviews = document.querySelector('.pageviews p')
const discountSlide = document.getElementById('toggle-slide')
const discountLabel = document.querySelector('.switch')

// Set value and innerHtml on load
window.onload = function(){
    billingSlider.value = '16'
    price.innerHTML = `$${billingSlider.value}.00`
    pageviews.innerHTML = `${billingSlider.value*6.25}k`
    discountSlide.checked = false
}

// Price change
priceChanger = () => {
    if (discountSlide.checked == true) {
        price.innerHTML = `$${billingSlider.value*0.75}`
        pageviews.innerHTML = `${billingSlider.value*6.25}k` 
    } else {
        price.innerHTML = `$${billingSlider.value}.00`
        pageviews.innerHTML = `${billingSlider.value*6.25}k`
    }
}

// Slider background color
sliderColor = () => {
    let x = billingSlider.value;
    let color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${x*3}%, hsl(224, 65%, 95%) ${x}%)`;
    billingSlider.style.background = color;
}

// discount event
discountSlide.addEventListener('click', () => {
    priceChanger()
})

discountLabel.addEventListener('keydown', () => {
    if (event.keyCode == 13) {
        if(discountSlide.checked == true) {
            discountSlide.checked = false
            priceChanger()
        } else {
            discountSlide.checked = true
            priceChanger()
        }
    }
})

// billing slider events
billingSlider.addEventListener('mousemove', () => {
    sliderColor()
    priceChanger()
});

billingSlider.addEventListener('keyup', () => {
    sliderColor()    
    priceChanger()
});

billingSlider.addEventListener('click', () => {
    sliderColor()
    priceChanger()
})

billingSlider.addEventListener('mousedown', ()=> {
    billingSlider.classList.add('range-hold')
})

billingSlider.addEventListener('mouseup', ()=> {
    billingSlider.classList.remove('range-hold')
})