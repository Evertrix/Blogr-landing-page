window.addEventListener("resize", () => {

    // if (window.matchMedia("(max-width: 975px)").matches) { 
    //     document.querySelector('.full-nav').style.visibility = "visible";
    //     document.querySelector('.navigation').style.visibility = "visible";
    //     document.querySelector('.featured-buttons').style.visibility = "visible";
    // }

    // if (window.matchMedia("(max-width: 889px)").matches) { 
    //     document.querySelector('.close-btn').reset();
    //     document.querySelector('.hamburger-menu').reset();
    //     document.querySelector('.full-nav').reset();
    //     document.querySelector('.navigation').reset();
    //     document.querySelector('.featured-buttons').reset();
    //     document.querySelector('.full-nav').reset();
    // }


    if(document.querySelector('.hamburger-menu').clicked == true) {
        if (window.matchMedia("(max-width: 889px)").matches) {
            // document.querySelector('.full-nav').style.position = "absolute";
            // document.querySelector('.full-nav').style.display = "grid";
            document.querySelector('.full-nav').style.visibility = "visible";
            document.querySelector('.navigation').style.visibility = "visible";
            document.querySelector('.featured-buttons').style.visibility = "visible";
        }
    }

    // if(document.querySelector('.close-btn').clicked == true) {
        // if (window.matchMedia("(min-width: 889px)").matches) {
        //     document.querySelector('.full-nav').style.visibility = "hidden";
        //     document.querySelector('.navigation').style.visibility = "visible";
        //     document.querySelector('.featured-buttons').style.visibility = "visible";
        // }

        // if (window.matchMedia("(max-width: 889px)").matches) { 
        //     document.querySelector('.full-nav').style.visibility = "visible";
        //     document.querySelector('.navigation').style.visibility = "visible";
        //     document.querySelector('.featured-buttons').style.visibility = "visible";
        // }
        
    // }
});

document.querySelector('.connect-btn').addEventListener('click', () => {
    document.querySelector('.connect--dropdown-content').classList.toggle('hidden');
});

document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.hamburger-menu').classList.add('hidden');
    document.querySelector('.close-btn').classList.remove('hidden');
    document.querySelector('.full-nav').style.visibility="visible";
    document.querySelector('.navigation').style.visibility="visible";
    document.querySelector('.connect--dropdown-content').style.visibility="visible";
    document.querySelector('.featured-buttons').style.visibility="visible";
});


document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.hamburger-menu').classList.remove('hidden');
    document.querySelector('.close-btn').classList.add('hidden');
    document.querySelector('.full-nav').style.visibility="hidden";
    document.querySelector('.navigation').style.visibility="hidden";
    document.querySelector('.connect--dropdown-content').style.visibility="hidden";
    document.querySelector('.featured-buttons').style.visibility="hidden";

    // document.querySelector('.close-btn').reset();
    //     document.querySelector('.hamburger-menu').reset();
    //     document.querySelector('.full-nav').reset();
    //     document.querySelector('.navigation').reset();
    //     document.querySelector('.featured-buttons').reset();
    //     document.querySelector('.full-nav').reset();
    
});