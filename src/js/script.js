window.onload = function () {
    let inner = document.querySelector('.preloader__percents');
    let wine_moving = document.querySelector('.preloader__wine--hidden');
    let square_falling = document.querySelector('.preloader__square');
    
    let marginItem = parseInt($('#rw3').css('margin-top'));
    let heightItem = parseInt($('#rw3').css('height'));
    let window_Width = window.innerWidth ? window.innerWidth : $(window).width();
    let w = window.innerWidth;
    
//    window.setTimeout(function () {
//         
//        var w = 0,
//        t = setInterval(function() {
//                w = w + 1;
//                inner.textContent = w+'%';
//
//                if (w === 100){
//                    clearInterval(t);
//                }
//            }, 20);
//      wine_moving.classList.add('moving');
//    
//      window.setTimeout(function () {square_falling.classList.add('falling');
//       window.setTimeout(function () {document.body.classList.add('loaded')
//        window.setTimeout(function () {
//        document.body.classList.add('loaded_hiding')},1000)},1000);},2500)
//    }, 2000);
     
    $('#collection').click(e =>{ 
        e.preventDefault();
        if($('.collection').hasClass('collection--active')){
            $('.collection').removeClass('collection--active');
            $('.collection__wrapper').removeClass('wrapper--active');
            $('.left__list').removeClass('list--active');
            
            
//        if(window_Width >= 550 && window_Width <= 660){
//            $('#rw5').removeClass('img--active');
//         }
            
            document.querySelector('.left__list').style.height = CollectionListHeight_default + 'px';
            if(window_Width > 550){
            document.querySelector('.collection__right').style.height = 
            height + 'px';}
            if (w>650 && w<700){
            document.querySelector('.collection__right').style.height = marginItem * 3 + heightItem * 3 + 'px';}
            if (w>550 && w<630){
            document.querySelector('.collection__right').style.height = marginItem * 4 + heightItem * 4 + 'px';}

        } 
        else{
        $('.collection').addClass('collection--active');
        $('.collection__wrapper').addClass('wrapper--active');
            
        document.querySelector('.left__list').style.height = CollectionListHeight_active + 'px';
            
        
        if(w > 550){    
        document.querySelector('.collection__right').style.height =  
        height + marginItem + heightItem - 3 + 'px'; 
            }
        }
    });
    
    
    
    //slick
    $('.reviews__container').slick({
        dots:true,
        
    });
    
    //select
    
    
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}
// section collection
    
    let CollectionListHeight_default = document.querySelector('.l1').scrollHeight + document.querySelector('.l2').scrollHeight + document.querySelector('.l3').scrollHeight; 
    
    let CollectionListHeight_active = 
    document.querySelector('.l1').scrollHeight + document.querySelector('.l2').scrollHeight + document.querySelector('.l3').scrollHeight +
    document.querySelector('.l4').scrollHeight + document.querySelector('.l5').scrollHeight + document.querySelector('.l6').scrollHeight +
    30 +
    document.querySelector('.left__text').scrollHeight;
    
    
    document.querySelector('.left__list').style.height = CollectionListHeight_default + 'px';
    
    var height = document.querySelector('.collection__left').scrollHeight;
   
     if(w > 550){    
        document.querySelector('.collection__right').style.height = height + 'px';
     }
    if (w>650 && w<700){
        document.querySelector('.collection__right').style.height = marginItem * 3 + heightItem * 3 + 'px';
    }
    if (w>550 && w<630){
            document.querySelector('.collection__right').style.height = marginItem * 4 + heightItem * 4 + 'px';}

    
    
    
    if(window_Width >= 1050){
            $('#rw5').addClass('img--active');
        }
    if(window_Width > 550 && window_Width <= 660){
            $('#rw5').addClass('img--active');
         } 
    
    
    $('#rw1').addClass('img--active');
    $('#rw2').addClass('img--active');
    $('#rw3').addClass('img--active');
    $('#rw4').addClass('img--active');
    
    
    //burger
    
    



 

        
    
 let $button = $('#burger');
 let $overlay = $('#overlay');
    
$button.on('click', function(e){
    e.preventDefault();
    if( $button.hasClass('open') ){
      $button.removeClass('open');
      $overlay.removeClass('overlay--active');
      $button.addClass('close');
    } else {
      $button.removeClass('close');
      $button.addClass('open');
      $overlay.addClass('overlay--active');
    }
});   
   
    
    
  }
