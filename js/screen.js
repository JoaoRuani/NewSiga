navbar = document.querySelector('header');
sections = document.querySelectorAll('section');
width = window.innerWidth;

if(width < 768){
    navbar.classList.add('fixed-top');
}

window.addEventListener('resize', function(){
    width = this.innerWidth;
    if(width < 768){
        navbar.classList.add('fixed-top');
    }
    else{
        navbar.classList.remove('fixed-top');
    }
});
 /*-----------------------------------------------*/
 

