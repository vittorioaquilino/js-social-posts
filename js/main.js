// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e 
// incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        
        "author": {
            "name": "Vittorio Aquilino",
            "image": "https://unsplash.it/300/300?image=15"
        },
        
        "likes": 180,
        "created": "2021-06-25"
    },
    {
        "id": 1,
        "content": "Anche se ho tirato uno schiaffo al presentatore, ho vinto l'oscar. Non è tanto ma è un lavoro onesto",
        "media": "https://media-assets.wired.it/photos/624bfa38e7033e257591fe8e/16:9/w_2560%2Cc_limit/1388090285",
        
        "author": {
            "name": "Will Smith",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg"
        },
        
        "likes": 5430,
        "created": "2021-06-25"
    }
];

const container = document.getElementById("container");
console.log(container);

posts.forEach((element) => {
    postContainer(element);
})

function postContainer(item) {
    // item in ingresso è un oggetto del tuo array
    const postBox = document.createElement("div");
    postBox.classList.add("post");
    postBox.innerHTML = 
    `<div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${item.author.image}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${item.author.name}</div>
                <div class="post-meta__time">${item.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${item.content}</div>
    <div class="post__image">
        <img src="${item.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${item.likes}</b> persone
            </div>
        </div> 
    </div>            
    `
    container.append(postBox);
}
