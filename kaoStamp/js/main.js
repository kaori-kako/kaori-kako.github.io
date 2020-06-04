'use strict';

{
  const syugou = [];
  for(var i = 0; i <= 23; i++){
    syugou.push('img/syugou/syugou'+(i+1)+'.png');
  }
  
  const tsutomu1 = [];
  for(var i = 0; i <= 15; i++){
    tsutomu1.push('img/tsutomu1/tsutomu'+(i+1)+'.png');
  }
  
  const tsutomu2= [];
  for(var i = 0; i <= 7; i++){
    tsutomu2.push('img/tsutomu2/tsutomu'+(i+1)+'.png');
  }
  
  const fenec= [];
  for(var i = 0; i <= 7; i++){
    fenec.push('img/fenec/fenec'+(i+1)+'.png');
  }

  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');
  Stamp(syugou,'main1','#thumbnails1');
  Stamp(tsutomu1,'main2','#thumbnails2');
  Stamp(tsutomu2,'main3','#thumbnails3');
  Stamp(fenec,'main4','#thumbnails4');
  
  menuItems.forEach(item => {
    item.addEventListener('click',e   =>{
      e.preventDefault();
      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      item.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(item.dataset.id).classList.add('active'); 
    });
  });


function Stamp(array,main,thumbnail){
  let currentIndex = 0;
  const mainImage = document.getElementById(main);  
  mainImage.src = array[currentIndex];

  array.forEach((image,index) => {
  const img = document.createElement('img');
  img.src = image;
  
  const li = document.createElement('li');
  if(index == currentIndex){
    li.classList.add('current');
  }
  li.addEventListener('click',() =>{
    mainImage.src = image;
    const thumbnails = document.querySelectorAll(thumbnail + '> li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });
  li.appendChild(img);
  document.querySelector(thumbnail).appendChild(li);
});
}


}
