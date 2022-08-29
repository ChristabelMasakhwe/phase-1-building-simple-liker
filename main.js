// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function addLikeListener() {
  const likeButtons = document.getElementsByClassName("like-glyph");
  for(const likeButton of likeButtons) {
    likeButton.addEventListener("click", onLikeButton)
  }
}
function onLikeButton() {
  mimicServerCall()
    .then((res) => {
    const hasFullHeart = this.classList.contains("activated-heart")

    if(hasFullHeart){
      this.innerHTML = EMPTY_HEART
      this.classList.removes("activated-heart");
    }else {
      this.innerHTML = FULL_HEART
      this.classList.add("activated-heart");
    }
  })
  .catch((error) => {
    const errorModal = document.getElementById("modal");
    errorModal.classList.remove("hidden");

    const errorMessageElement = document.createElement.innerHTML = error
    errorModal.appendChild(errorMessageElement);

    setTimeout(() => {
      errorModal.removeChild(errorMessageElement)
      errorModal.classList.add("hidden");
    },3000)
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
addLikeListener();
