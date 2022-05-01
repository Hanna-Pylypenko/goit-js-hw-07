import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a> </div>`;
    })
    .join(" ");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
