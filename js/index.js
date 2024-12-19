//projects page

var slide_index = 1;
show_slide(slide_index);

function plus_slide(n) {
    show_slide(slide_index += n)
}

function current_slide(n) {
    show_slide(slide_index = n)
}

function show_slide(n) {
    var i;
    var slides = document.getElementsByClassName("slider_item");

    if(n > slides.length) {slide_index = 1}
    if(n < 1) {slide_index = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    
    slides[slide_index - 1].style.display = "block";
}