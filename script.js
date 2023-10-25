
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);





document.addEventListener('DOMContentLoaded', function() {
  const hotspots = document.querySelectorAll('.Hotspot');


  const handleMouseEnter = function() {
    const annotation = this.querySelector('.HotspotAnnotation');
    if (annotation) {
      annotation.style.display = 'block';
    }
  };


  const handleMouseLeave = function() {
    const annotation = this.querySelector('.HotspotAnnotation');
    if (annotation) {
      annotation.style.display = 'none';
    }
  };

 
  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', handleMouseEnter);
    hotspot.addEventListener('mouseleave', handleMouseLeave);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const hotspots = document.querySelectorAll('.Hotspot');

  const handleMouseEnter = function() {
    const annotation = this.querySelector('.HotspotAnnotation');
    if (annotation) {
      annotation.style.display = 'block';
      gsap.from(annotation, { opacity: 100, y: 20, duration: 0.5, ease: 'power2.out' }); // Fade in and slide up animation
    }
  };

  const handleMouseLeave = function() {
    const annotation = this.querySelector('.HotspotAnnotation');
    if (annotation) {
      gsap.to(annotation, { opacity: 100, y: 20, duration: 0.5, ease: 'power2.in', onComplete: () => {
        annotation.style.display = 'none';
      }}); 
    }
  };

  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', handleMouseEnter);
    hotspot.addEventListener('mouseleave', handleMouseLeave);
  });
});
