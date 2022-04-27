import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onGalleryClick);


const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                 <a class="gallery__link" href = "${original}">
                   <img
                  class="gallery__image"
                  src="${preview}"
                   data-source="${original}"
                   alt="${description}"/>
                 </a>
               </div> `}).join(' ');

}


console.log(galleryEl);

function onGalleryClick(event) {
    event.preventDefault();
    console.log('clicky-click');
    ;
}

