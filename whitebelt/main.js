
function changeColor() {
    let links = document.getElementsByTagName("a"); 

    for (i = 0; i < links.length; i++) {
        links[i].classList.toggle('linkstyle');
    }
}; 

