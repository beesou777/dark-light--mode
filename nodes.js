function toggle(){
    var element = document.body;
    element.classList.toggle("theme")
}


const clickClose = document.querySelector(".close");
const clickOpen = document.querySelector(".open");

clickClose.addEventListener('click', () =>{
    if(clickOpen.classList.contains('open')){
        clickOpen.classList.add('active');
        clickClose.classList.remove('active');
    }
});

clickOpen.addEventListener('click', () =>{
    if(clickClose.classList.contains('close')){
        clickClose.classList.add('active');
        clickOpen.classList.remove('active');
    }
})

var btns = document.getElementsByClassName("saman");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("lamo");
    current[0].className = current[0].className.replace(" lamo", "");
    this.className += " lamo";
  });
} 