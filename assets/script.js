const menuBtn = document.querySelector('.menu i');
const closeBtn = document.querySelector('.btnClose');
const header = document.querySelector('.header');
const heroBg = document.querySelector('.bg-hero');
const openMenu = ()=>{
    header.classList.add('navVisibale');
    // heroBg.classList.add('opacity');
}
const closeMenu = ()=>{
    header.classList.remove('navVisibale');
    // heroBg.classList.remove('opacity');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);


// for drop down 
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("drop");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// for the img observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.add('showtitle');

        }
        else{
            entry.target.classList.remove('show');
            entry.target.classList.remove('showtitle');
        }
    });
})

const hiddenEl = document.querySelectorAll('.hidden');
const hiddenText = document.querySelectorAll('.hiddentitle');
hiddenEl.forEach((el)=> observer.observe(el));
hiddenText.forEach((el)=> observer.observe(el));


// for Dark Theme 

const darkBtn = document.querySelector('.moon i');

const ChangeTheme = ()=>{
    document.body.classList.toggle('darktheme');
    
}
darkBtn.addEventListener('click', ChangeTheme);



// For Sticky Navbar 
