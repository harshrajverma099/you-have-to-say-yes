let no = document.querySelector("#runawayButton")

no.addEventListener("click",function(){
    alert("You Have To Say Yes")
})

const video = document.getElementById('myVideo');

    video.play();

    video.addEventListener('pause', function () {
      video.play(); 
    });


    let yes = document.querySelector("#yess")

    yes.addEventListener("click", function(){
        const hide = document.querySelector(".hide")
        hide.style.display = "none"
        const myvideo = document.querySelector("#video")
        myvideo.style.display = "flex"
    })