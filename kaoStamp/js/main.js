'use strict';

{
  const syugou=[
    'img/syugou/syugou1.png',
    'img/syugou/syugou2.png',
    'img/syugou/syugou3.png',
    'img/syugou/syugou4.png',
    'img/syugou/syugou5.png',
    'img/syugou/syugou6.png',
    'img/syugou/syugou7.png',
    'img/syugou/syugou8.png',
    'img/syugou/syugou9.png',
    'img/syugou/syugou10.png',
    'img/syugou/syugou11.png',
    'img/syugou/syugou12.png',
    'img/syugou/syugou13.png',
    'img/syugou/syugou14.png',
    'img/syugou/syugou15.png',
    'img/syugou/syugou16.png',
    'img/syugou/syugou17.png',
    'img/syugou/syugou18.png',
    'img/syugou/syugou19.png',
    'img/syugou/syugou20.png',
    'img/syugou/syugou21.png',
    'img/syugou/syugou22.png',
    'img/syugou/syugou23.png',
    'img/syugou/syugou24.png',
  ];

  const tsutomu1=[
    'img/tsutomu1/tsutomu1.png',
    'img/tsutomu1/tsutomu2.png',
    'img/tsutomu1/tsutomu3.png',
    'img/tsutomu1/tsutomu4.png',
    'img/tsutomu1/tsutomu5.png',
    'img/tsutomu1/tsutomu6.png',
    'img/tsutomu1/tsutomu7.png',
    'img/tsutomu1/tsutomu8.png',
    'img/tsutomu1/tsutomu9.png',
    'img/tsutomu1/tsutomu10.png',
    'img/tsutomu1/tsutomu11.png',
    'img/tsutomu1/tsutomu12.png',
    'img/tsutomu1/tsutomu13.png',
    'img/tsutomu1/tsutomu14.png',
    'img/tsutomu1/tsutomu15.png',
    'img/tsutomu1/tsutomu16.png',
  ];

  const tsutomu2=[
    'img/tsutomu2/tsutomu1.png',
    'img/tsutomu2/tsutomu2.png',
    'img/tsutomu2/tsutomu3.png',
    'img/tsutomu2/tsutomu4.png',
    'img/tsutomu2/tsutomu5.png',
    'img/tsutomu2/tsutomu6.png',
    'img/tsutomu2/tsutomu7.png',
    'img/tsutomu2/tsutomu8.png',
  ];

  const fenec=[
    'img/fenec/fenec1.png',
    'img/fenec/fenec2.png',
    'img/fenec/fenec3.png',
    'img/fenec/fenec4.png',
    'img/fenec/fenec5.png',
    'img/fenec/fenec6.png',
    'img/fenec/fenec7.png',
    'img/fenec/fenec8.png',
  ];

  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');
  var selectedStamp = '';
  syugouStamp();
  tsutomu1Stamp();
  tsutomu2Stamp();
  fenecStamp();
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


function syugouStamp(){
  let currentIndex = 0;
  const mainImage = document.getElementById('main1');  
  mainImage.src = syugou[currentIndex];

  syugou.forEach((image,index) => {
  const img = document.createElement('img');
  img.src = image;
  
  const li = document.createElement('li');
  if(index == currentIndex){
    li.classList.add('current');
  }
  li.addEventListener('click',() =>{
    mainImage.src = image;
    const thumbnails = document.querySelectorAll('.thumbnails1 > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });
  li.appendChild(img);
  document.querySelector('.thumbnails1').appendChild(li);
});
}

function tsutomu1Stamp(){
  let currentIndex = 0;
  const mainImage = document.getElementById('main2');  
  mainImage.src=tsutomu1[currentIndex];
  tsutomu1.forEach((image,index) => {
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  if(index == currentIndex){
    li.classList.add('current');
  }
  li.addEventListener('click',() =>{
    mainImage.src = image;
    const thumbnails = document.querySelectorAll('.thumbnails2 > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });
  li.appendChild(img);
  document.querySelector('.thumbnails2').appendChild(li)
});
}


function tsutomu2Stamp(){
  let currentIndex = 0;
  const mainImage = document.getElementById('main3');  
  mainImage.src=tsutomu2[currentIndex];
  tsutomu2.forEach((image,index) => {
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  if(index == currentIndex){
    li.classList.add('current');
  }
  li.addEventListener('click',() =>{
    mainImage.src = image;
    const thumbnails = document.querySelectorAll('.thumbnails3 > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });
  li.appendChild(img);
  document.querySelector('.thumbnails3').appendChild(li)
});
}


function fenecStamp(){
  let currentIndex = 0;
  const mainImage = document.getElementById('main4');  
  mainImage.src=fenec[currentIndex];
  fenec.forEach((image,index) => {
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  if(index == currentIndex){
    li.classList.add('current');
  }
  li.addEventListener('click',() =>{
    mainImage.src = image;
    const thumbnails = document.querySelectorAll('.thumbnails4 > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });
  li.appendChild(img);
  document.querySelector('.thumbnails4').appendChild(li)
});
}
}
