let cat = document.querySelector('.cat'),
 btn = document.querySelector('.blya');

function myAnimation(){
   let pos = 400;
   let id = setInterval(frame, 10);
   function frame(){
      if (pos == 60){
          clearInterval(id);
        } else{
          pos--;
          cat.style.top = pos + 'px';
      }
  }
}

document.addEventListener("DOMContentLoaded",myAnimation());

btn.addEventListener('click', ()=>{
    alert('BURANYAAA')
})