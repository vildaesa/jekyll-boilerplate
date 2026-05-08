window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  
  setTimeout(() => {
    preloader.classList.add('preloader-hidden');
  }, 500); // 500ms = 0.5 detik
});
