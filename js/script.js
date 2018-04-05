function imageSearch() {
  const userSearch = document.getElementById('search');
  const search = userSearch.value.toLowerCase();
  const photoGallery = document.getELementById('lightbox-gallery');
  const photo = photoGallery.children();
  const p;

  for (let i = 0; i < photo.length; i +=1) {
    p = photo[i];
    if(p.getAttribute('data-title').toLowerCase().indexOf(search) > -1) {
      photo[i].style.display = "";
    } else {
      photo[i].style.display = "none";
    }
  }
}
