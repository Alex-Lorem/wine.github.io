window.onload = function () {
    let inner = document.querySelector('.preloader__percents');
    let wine_moving = document.querySelector('.preloader__wine--hidden');
    let square_falling = document.querySelector('.preloader__square');
   
    window.setTimeout(function () {
         
        var w = 0,
        t = setInterval(function() {
                w = w + 1;
                inner.textContent = w+'%';

                if (w === 100){
                    clearInterval(t);
                }
            }, 20);
      wine_moving.classList.add('moving');
    
      window.setTimeout(function () {square_falling.classList.add('falling');
       window.setTimeout(function () {document.body.classList.add('loaded')
        window.setTimeout(function () {
        document.body.classList.add('loaded_hiding')},1000)},1000);},2500)
    }, 2000);
     
  }