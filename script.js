        // picture slideshow

document.addEventListener('DOMContentLoaded', function() {
    let i = 0;
    let imgContainer = document.querySelector('.img-container');
    let photos = ['./static/aboutMeImg.jpg', './static/cooking1.jpg', './static/family1.jpg', './static/family2.jpg',
     './static/jackson1.jpg', './static/jami-jackson1.jpg', './static/jami-william1.jpg', './static/william-jackson1.jpg', './static/william1.jpg'];

     function changePhoto(){
        imgContainer.classList.add('fade-out');
        setTimeout(function() {
            imgContainer.style.backgroundImage = `url(${photos[i]})`;
            imgContainer.classList.remove('fade-out');
            i++;
            if (i === photos.length){
                i = 0;
            }
        }, 600);
     }

     setInterval(changePhoto, 3000);

        changePhoto();
    
});

        // contact toggle

let github = document.getElementById('github');
let number = document.getElementById('number');
let address = document.getElementById('address');
let contactDropdown = document.getElementById('contact-dropdown');
let hideButton = document.getElementById('hide-contact-dropdown');

let showInfo = function(){
    let elements = Array.from(arguments);
    console.log(elements);
    elements.forEach(element => {
        element.style.display = 'flex';        
    });
}

let hideInfo = function(elm1, elm2){
    let elements = Array.from(arguments);

    elements.forEach(element => {
        element.style.display = 'none';        
    });
}

contactDropdown.onclick = function(){
    showInfo(address, number, github, hideButton);
    hideInfo(contactDropdown);
};

hideButton.onclick = function(){
    hideInfo(address, number, github, hideButton);
    showInfo(contactDropdown);
};