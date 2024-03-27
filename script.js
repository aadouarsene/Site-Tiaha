


//Changement de la barre de menu après 453px

function changebg(){
    let menuBarre = document.querySelector('.menubarre');
    let scrollValue = window.scrollY;
    if(scrollValue > 453){
        menuBarre.classList.add('scroll');

    } else {
        menuBarre.classList.remove('scroll');
    }

}

window.addEventListener('scroll', changebg);

let photoEnock = document.getElementById('photoChef')
console.log(photoEnock);



