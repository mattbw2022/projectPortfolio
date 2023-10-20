document.addEventListener('DOMContentLoaded', ()=> {
    const socialBtn = document.getElementById('social-btn');
    const contactBtn = document.getElementById('contact-btn');
    const social = document.getElementById('social-info-container');
    const contact = document.getElementById('contact-info-container');
    const dropdown = document.getElementById('dropdown-btn');
    const hoverDropdown = document.getElementById('hover-dropdown');
    const verticalNav = document.getElementById('vertical-nav')
    const logo = document.getElementById('mw-logo-container');
    const logoText = document.getElementById('mw-text');
    const linkedIn = document.getElementById('linked-in');
    const github = document.getElementById('github');
    const facebook = document.getElementById('fb');
    const x = document.getElementById('x');

    linkedIn.addEventListener('mouseover', ()=>{toggleImage(linkedIn.id, './static/hover-linkedin.png')});
    linkedIn.addEventListener('mouseleave', ()=>{ toggleImage(linkedIn.id, './static/linkedin-logo.png')});
    github.addEventListener('mouseover', ()=>{ toggleImage(github.id, './static/hover-github.png')});
    github.addEventListener('mouseleave', ()=>{ toggleImage(github.id, './static/github-logo.png')});
    facebook.addEventListener('mouseover', ()=>{ toggleImage(facebook.id, './static/hover-fb.png')});
    facebook.addEventListener('mouseleave', ()=>{ toggleImage(facebook.id, './static/fb-logo.png')});
    x.addEventListener('mouseover', ()=>{ toggleImage(x.id, './static/hover-x.png')});
    x.addEventListener('mouseleave', ()=>{ toggleImage(x.id, './static/x-logo.png')});

    logo.addEventListener('mouseover', () => {
        logoText.style.color = '#7a7a7a';
    });
    logo.addEventListener('mouseleave', ()=> {
        logoText.style.color = 'white';
    });

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

const toggleImage = (id, newImage) =>{
    const imgElement = document.getElementById(id);
    imgElement.src = newImage;
}
