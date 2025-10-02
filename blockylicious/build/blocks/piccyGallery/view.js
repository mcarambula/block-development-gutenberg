/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/piccyGallery/view.js ***!
  \*****************************************/
// Modern approach with better performance and cleaner code
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.wp-block-blockylicious-piccy-gallery').forEach(initializeGallery);
});
function initializeGallery(gallery) {
  const thumbnails = [...gallery.querySelectorAll('.thumb')];
  const imagePreview = gallery.querySelector('.image-preview-img');
  if (!thumbnails.length || !imagePreview) return;
  gallery.addEventListener('click', e => {
    if (e.target.classList.contains('thumb')) {
      selectThumbnail(thumbnails, e.target, imagePreview);
    }
  });

  // Initialize with first thumbnail
  selectThumbnail(thumbnails, thumbnails[0], imagePreview);
}
function selectThumbnail(thumbnails, selectedThumbnail, imagePreview) {
  // Remove selected class from all thumbnails
  thumbnails.forEach(thumb => thumb.classList.remove('selected'));

  // Add selected class to clicked thumbnail
  selectedThumbnail.classList.add('selected');

  // Update preview image
  const largeImageUrl = selectedThumbnail.dataset.largeSize;
  if (largeImageUrl) {
    imagePreview.src = largeImageUrl;
  }
}
/******/ })()
;
//# sourceMappingURL=view.js.map