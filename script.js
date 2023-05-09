// document.addEventListener('DOMContentLoaded', function() {
//     let signature = document.getElementsByTagName('h1')[0];
//     let fonts = ['Pacifico', 'Caveat', 'Cinzel', 'Dancing Script', 'Gloria Hallelujah', 'Great Vibes', 'Yellowtail'];
//     function changeFont(){
//         signature.style.fontFamily = fonts[Math.floor(Math.random()*fonts.length)];
//     }

//     setInterval(changeFont, 2000);

//         changeFont();
// });

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

        // footer hover

let phone = document.getElementById('phone');
let email = document.getElementById('email');
let github = document.getElementById('github');
let number = document.getElementById('number');
let address = document.getElementById('address');

let hover = function(elm1, elm2){
    elm1.style.display = 'none';
    elm2.style.display = 'flex';
}

let reset = function(elm1, elm2){
    elm1.style.display = 'flex';
    elm2.style.display = 'none';
}

let gitHover = function(){
    github.style.display = 'none';
    github.style.display = 'flex';
}

phone.onmouseover = function(){
    hover(phone, number);
};

number.onmouseleave = function(){
    reset(phone, number);
}

email.onmouseover = function(){
    hover(email, address);
};

address.onmouseleave = function(){
    reset(email, address);
};


