
const box = document.getElementById('box'),
navIcon = document.querySelector('.nav-icon'),
mobileNav = document.querySelector('.mobile-nav'), 
navContainer = document.getElementById('header-container')

window.onscroll = () =>{

    if(window.pageYOffset>30){
        navContainer.style.backgroundColor = 'rgba(0,0,0,.6)'
    }else{
        navContainer.style.backgroundColor = '#000'
    }
        
    // @var int totalPageHeight
     var totalPageHeight = document.body.scrollHeight; 
     
     // @var int scrollPoint
     var scrollPoint = window.scrollY + window.innerHeight;
     
     // check if we hit the bottom of the page
     if(scrollPoint >= totalPageHeight)
     {
         // alert('end')
         box.style.display = 'block'
        }else{
            box.style.display = 'none';
            
        }
    }
    


$(document).ready(function(){
    
    $('.nav-icon').click(function(){
        $('.mobile-nav').toggleClass('nav-show')
        $(this).toggleClass('icon-move')
      })
      
      $('.fAndq-container .question-content').click(function(){
          $(this).next().slideToggle()
          $('.fAndq-container .answer-content').not($(this).next()).slideUp()
        })
    })
    

    
    
    box.onclick = () =>{
        document.documentElement.scrollTop = 0
    }


    
    new WOW().init();
    


    const swiper = new Swiper('.swiper-container', {
        speed: 600,
        parallax: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },    
        
        pagination: {
            el: '.swiper-pagination',
          clickable: true,  
        },  
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },    
    });    
    
    
const  inputs = document.querySelectorAll('.input'),
inputs_name = document.querySelectorAll('.name-input'),
inputsTitle = document.querySelectorAll('.input-title'),
form = document.getElementById('form'),
error = document.getElementById('error'),
name = document.getElementById('input-name'),
phone = document.getElementById('input-phone'),
email = document.getElementById('email'),
select = document.getElementById('select'),
message = document.getElementById('message'),
notRobot = document.getElementById('not-robot')

function focusFunc(){
    let parent = this.parentNode
    parent.classList.add('focus')
}


function blurFunc(){
    let parent = this.parentNode
    
    if(this.value == ''){
        parent.classList.remove('focus')
    }
    
}

inputs.forEach(input=>{
    input.addEventListener('focus',focusFunc)
    input.addEventListener('blur',blurFunc)
})

form.onsubmit = (e)=>{
    e.preventDefault()
    console.log(notRobot.value)
    if(name.value.trim().length!=0&&phone.value.trim().length!=0&&email.value.trim().length!=0&&select.value.trim().length!=0&&message.value.trim().length!=0){
        
        console.log(message.value.trim().length)
        
        if(name.value.length<5){
        error.innerHTML ='Error: Name Must Be More Than 5 Char'
    }
    else if(email.value.endsWith('@gmail.com')==false&&email.value.endsWith('@yahoo.com')==false&&email.value.endsWith('@hotmail.com')==false&&email.value.endsWith('@outlook.com')==false){
        error.innerHTML ='Error: Email Must Be Correct And Ends With Like @emailName.com '

    }
    

    else if(phone.value*0!=0){
        error.innerHTML ='Error: Phone Number Must Be Numbers Only'
        
    }
    
    else if(phone.value.length!= 11){
        error.innerHTML ='Error: Phone Number MusT Be 11 Number'
    }
    
    else if(phone.value.startsWith('011')==false&&phone.value.startsWith('012')==false&&phone.value.startsWith('010')==false&&phone.value.startsWith('015')==false){
        error.innerHTML ='Error: Phone Number Must Starts With 010 or 012 or 011 or 015'
        
    }else if(notRobot.value!='true'){
        error.innerHTML ='Please Verify That You Are Human'
    }
    
    else{
        error.innerHTML =''
        
        alert('The data has been sent successfully')
        
    }
    
}else{
    error.innerHTML ='Error:  All Inputs Must Not Be Empty'
    
}

}



notRobot.onclick = () =>{
    notRobot.value =   notRobot.value =='on'?true:'on'
}

