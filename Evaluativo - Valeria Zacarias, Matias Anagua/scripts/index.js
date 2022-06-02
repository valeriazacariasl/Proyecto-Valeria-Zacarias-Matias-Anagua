const video = document.querySelectorAll('video')

video.forEach(video => {
    
video.addEventListener('mouseover', function(){
  this.play()
})

video.addEventListener('mouseleave', function(){
  this.pause()
})
});