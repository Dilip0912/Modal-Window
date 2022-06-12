'use strict';

const modal=document.querySelector('.modal');
const btnCloseModal=document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.show-modal');
console.log(btnOpenModal)


for( let i=0;i<3;i++)
{
    btnOpenModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
    });        
}
btnCloseModal.addEventListener('click', function() {
    modal.classList.add('hidden');
});    

document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden')
        }
    }
});