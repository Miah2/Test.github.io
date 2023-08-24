
const menu =  document.querySelector('.menu-icon')
const nav=  document.querySelector('nav')
let toggle = false

menu.addEventListener('click', () => {
   toggle = !toggle
   console.log(toggle)
   if(toggle){
      nav.classList.add('open-nav')        
   }
   if(!toggle){
      nav.classList.remove('open-nav')
   }
})

var Header = document.getElementById("Header")
        var menuu = document.getElementById("menuu")

        window.onscroll = function(){
          if(window.pageYOffset >= menuu.offsetTop){
            Header.classList.add("sticky")
            menuu.classList.add("sticky")
          }
          else{
            Header.classList.remove("sticky")
            menuu.classList.remove("sticky")
          }
        }

        function googleTranslateElementInit(){
         new google.translate.TranslateElement(
           {pageLanguage: 'en'},
            'google_translate_element'
         );
        }