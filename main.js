window.addEventListener("load", () =>{
   image()
});

function image(){
   link = document.createElement("a")
   link.href = "berd.png"
   link.download = "image.png"
   link.click()
}
