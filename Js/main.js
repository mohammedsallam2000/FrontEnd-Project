var inputName = document.getElementById("name");
var result = document.getElementById("result")
var paragraph = document.getElementById("paragraph")
var Contact = document.getElementById("contact");
var sliderImages = document.getElementsByClassName("img");

function sendMessage() {
    paragraph.innerHTML = "Thanks " + inputName.value + " your request was sent &#128512;"
    Contact.style.display = "none"
    result.style.display = "inline-block"
    form.reset()
    return false;
}

var counter = 0;

function slider() {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
    counter++;
    if (counter > sliderImages.length) {
        counter = 1
    }
    sliderImages[counter - 1].style.display = "block";
    setTimeout(slider, 3000);
}
slider();