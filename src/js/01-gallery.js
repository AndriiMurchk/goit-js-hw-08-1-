// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);


const divRef = document.querySelector(".gallery");

function createGallaryMarkup(items) {
    return items
    .map(
        (item) => `
        <div class="gallery">
            <a class="galery__item" href="${item.original}">
            <img 
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
            </a>
            </div>`
    )
    .join("");

}

const addGalleryMarkup = createGallaryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;

const gallery = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250, });