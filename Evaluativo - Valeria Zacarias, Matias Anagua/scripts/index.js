const video = document.querySelector('video')

video.addEventListener('mouseover', function(){
  this.play()
})

video.addEventListener('mouseleave', function(){
  this.pause()
})