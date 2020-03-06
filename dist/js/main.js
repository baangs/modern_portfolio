// select DOM(HTML classes, tags, menu -btn, overlay, nav-btn) and put into variables (const)

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

//this takes all of these variables and sort of makes them into an array(node list)
// the (all) allows you to select multiple

const navItems = document.querySelectorAll('.nav-item');

// set intitial (State or Overlay) of menu, make variables that represents open/close
// set to true or false, have to use let, also need an event listener

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) { //if the menu (state) is not shown
        menuBtn.classList.add('close'); //when click closes menu button (x button)
        menu.classList.add('show');  // when click it shows menu button
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show')); //since theres more than one nav links (home, about me), we need toloop thru items and use the 'show' class for each item
        
        //set menu state

        showMenu = true;
    
    
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');  
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set menu state

        showMenu = false;
    }
}