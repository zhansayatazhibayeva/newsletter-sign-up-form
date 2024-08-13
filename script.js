document.querySelector('button[type="submit"]').addEventListener('click',function(event){
    event.preventDefault();
    var emailInput=document.querySelector('input[type="email"]');
    var emailValue = emailInput.value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var wrongEmailMsg  = document.querySelector('.wrong-email');
    var thankState = document.querySelector('#thank-you-state');
    var mainState = document.querySelector('#main-state');

    

    if(!emailPattern.test(emailValue)){
        wrongEmailMsg.style.display='block';
        emailInput.style.border='solid red';
    }
    else{
        mainState.style.display='none';
        mainState.style.flexDirection="row";
        thankState.style.display='block';
    }
    
});
