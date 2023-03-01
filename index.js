// for funtioning the navbar buttons
function toHome(e){
    const homeBtn = document.querySelector('body').scrollIntoView(true);    
}

function toContact(e){
    let contactPage = document.getElementById('contact-page');
    contactPage.scrollIntoView(true);
}
function linkedin(e){
    window.location.href="https://www.linkedin.com/in/hemantmaurya344/";
}
function twitter(e){
    window.location.href="https://twitter.com/mauryahemant19";
}
function github(e){
    window.location.href="https://github.com/hemantmaurya344";
}
function instagram(e){
    window.location.href="https://www.instagram.com/iamhemantmaurya/";
}