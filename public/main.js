var btn = document.querySelector('button')
var trash = document.getElementsByClassName("fa-trash");

function getGif(){
  let tvMovCharacter = document.querySelector('.character').innerText
  console.log(tvMovCharacter)
  const url =(`https://api.giphy.com/v1/gifs/search?api_key=AIiaEGS4Zzd6LT85Mpo3pttpK5lluMmH&q=${tvMovCharacter}&limit=2&offset=5&rating=pg-13&lang=en`)
  fetch(url)
  .then(res => res.json())
  .then(gif => {
      console.log(gif)
      document.querySelector('h3').innerText = tvMovCharacter
      document.querySelector('img').src = gif.data[0].images.fixed_height.u
  })
  .catch(err => {
    console.log(`error ${err}`)
                    
    })
  }
 

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const movieshow = this.parentNode.parentNode.childNodes[3].innerText
        const quote = this.parentNode.parentNode.childNodes[5].innerText
        fetch('/deleted', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'movieshow': movieshow,
            'quote': quote
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
btn.addEventListener('click', getGif)