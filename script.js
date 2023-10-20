document.addEventListener('DOMContentLoaded', ()=> {
    const socialBtn = document.getElementById('social-btn');
    const contactBtn = document.getElementById('contact-btn');
    const social = document.getElementById('social-info-container');
    const contact = document.getElementById('contact-info-container');
    const dropdown = document.getElementById('dropdown-btn');
    const hoverDropdown = document.getElementById('hover-dropdown');
    const horizontalNav = document.getElementById('horizontal-nav');
    const verticalNav = document.getElementById('vertical-nav')

    dropdown.addEventListener('mouseover', ()=>{
        dropdown.style.display = 'none';
        hoverDropdown.style.display = 'flex';
    });

    hoverDropdown.addEventListener('mouseleave', ()=>{
        dropdown.style.display = 'flex';
        hoverDropdown.style.display = 'none';
    })

    document.addEventListener('click', (event)=>{
        const clickedElement = event.target;
        if (clickedElement.id === hoverDropdown.id){
            if (verticalNav.style.display === 'none' || verticalNav.style.display === ''){
                verticalNav.style.display = 'flex';
            }
    
            else{
                verticalNav.style.display = 'none';
            }
        }
        else{
            verticalNav.style.display = 'none';
        }

    });

    document.addEventListener('click', (event)=>{
        const target = event.target;
        if (target.id === socialBtn.id){
            if (social.style.display === 'none' || social.style.display === ''){
                
                social.style.display = 'flex';
            }
            else{
                
                social.style.display = 'none';
            }
        }
        else if (target.id === contactBtn.id){
            if (contact.style.display === 'none' || contact.style.display === ''){
                
                contact.style.display = 'flex';
            }
            else{
                
                contact.style.display = 'none';
            }
        }

        else{
            contact.style.display = 'none';
            social.style.display = 'none';
        }
        
    });

    
    function trackScreenSize() {
        const screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
        const dropdownBtn = document.getElementById('dropdown-btn');
        if (screenWidth <= 743 && (hoverDropdown.style.display === 'none' || hoverDropdown.style.display === '')){
            dropdownBtn.style.display = 'flex';
        }
        else{
            dropdownBtn.style.display = 'none';
        }
    }
    
    trackScreenSize();
    
    window.addEventListener('resize', trackScreenSize);
});



        // contact toggle

// let github = document.getElementById('github');
// let number = document.getElementById('number');
// let address = document.getElementById('address');
// let contactDropdown = document.getElementById('contact-dropdown');
// let hideButton = document.getElementById('hide-contact-dropdown');

// let showInfo = function(){
//     let elements = Array.from(arguments);
//     elements.forEach(element => {
//         element.style.display = 'flex';        
//     });
// }

// let hideInfo = function(elm1, elm2){
//     let elements = Array.from(arguments);

//     elements.forEach(element => {
//         element.style.display = 'none';        
//     });
// }

// contactDropdown.onclick = function(){
//     showInfo(address, number, github, hideButton);
//     hideInfo(contactDropdown);
// };

// hideButton.onclick = function(){
//     hideInfo(address, number, github, hideButton);
//     showInfo(contactDropdown);
// };
