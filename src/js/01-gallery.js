import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('ul.gallery');

const markupArray = [];

galleryItems.forEach(image => {
  const markup = `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.original}">
        <img
          class="gallery-image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </li>
  `;

  markupArray.push(markup);
});

gallery.innerHTML = markupArray.join('');

const lightbox = new SimpleLightbox('.gallery li a', {});

