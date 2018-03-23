
//nav lookups
var elements = [document.getElementById('whoarewe'), document.getElementById('contact')];
var elementsLi = [document.getElementById('whoareweLi'), document.getElementById('contactLi')];
var li = [];
var currentSection = undefined;

// element lookup pointers
var nav = document.getElementById('nav');



// init function
(function() {
    AOS.init();
    window.onscroll = () => scrollNav();

    // create a LUT for offsets
    for(i in elements){
        li.push(getOffset(elements[i]));
    }
    
    
})();

function scrollToDiv(id){
    document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'});
}

function scrollNav(){
    // if the scroll bar is below 20px, show the navbar.
    // dirty ternary here because I liked how it looked.
    // preemptive minification (fewer chars & loc)
    nav.style.top = 
        (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) ?
        '0px' : '-60px';
    /*handle scroll highlighting*/
    if(window.pageYOffset < li[1] - 250){
        elementsLi[i].classList.remove("active");
    }
    
    if(window.pageYOffset > li[0] - 250){
        elementsLi[0].classList.add("active");
        elementsLi[1].classList.remove("active");
    } else if(window.pageYOffset > li[1] - 150){
        elementsLi[1].classList.add("active");
        elementsLi[0].classList.remove("active");
    }
    
}

// get offset of element from top
function getOffset(element){
    return (element.getBoundingClientRect().top + window.scrollY);
}
