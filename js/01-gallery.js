import { galleryItems } from './gallery-items.js';


const list = document.querySelector('.gallery');

const images = galleryItems.map(({ preview, description, original }) => `
  <li>
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
    </a>
  </li>
`).join('');

const openimg = (event) => {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
    `);
    instance.show();
    
  }
}




list.insertAdjacentHTML("beforeend", images);
list.addEventListener("click",openimg);

