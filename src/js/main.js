/*
*
* 1. Au clic de l’élément .tumbler__wrapper vous devez ajouter les classes
* 2. body--night-mode à l'élément body
* 3. tumbler--night-mode à l’élément .tumbler
* 4. À tous les éléments .post la classe post--night-mode
* 5. Quand on clique une seconde fois il faut retirer les classes que vous venez d'ajouter
*
*/
const changeMode = {
    start(){
        document.querySelector(".tumbler__wrapper").addEventListener('click', ()=>{
            this.modeSombre();
            }
        );
    },
    modeSombre() {
        //fond du body
        document.body.classList.toggle('body--night-mode');
        //bouton image
        document.querySelector('.tumbler').classList.toggle("tumbler--night-mode");
        // ligne des artciles class .post
        let articles = document.querySelectorAll('.post');
        for(let article of articles){
            article.classList.toggle('post--night-mode');
        }
    }
};



changeMode.start();
