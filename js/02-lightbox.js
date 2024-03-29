import { galleryItems } from './gallery-items.js';


const list = document.querySelector('.gallery');

const images = galleryItems.map(({ preview, description, original }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
    </a>
  </li>
`).join('');

list.insertAdjacentHTML("beforeend", images);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

list.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    lightbox.open();
  }
});
