const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const popupopen = document.querySelector('.button');
const popupopen2 = document.querySelector('.button2');
const popupopen3 = document.querySelector('.button3');
const popupopen4 = document.querySelector('.button4');
const popupwindow = document.querySelector('.popup-container');
const popupclose = document.querySelector('.popup-close');
const maincontainer = document.querySelector('.mobile-container');

popupopen.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen2.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(10px)';
});

popupopen3.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(10px)';
});

popupopen4.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(10px)';
});

popupclose.addEventListener('click', () => {
  popupwindow.classList.remove('show');
  maincontainer.style.filter = 'blur(0px)';
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
  
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const PopupArray = [{
  title: 'Multi-Post Stories',
  img: './images/projectImg.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  techstack1: 'html',
  techstack2: 'Ruby on rails',
  techstack3: 'css',
  techstack4: 'Github', 
}];

const ContainerPopup = document.getElementsByClassName('popup');

for (let i = 0; i < ContainerPopup.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('popup-container');

  const head = document.createElement('div');
  head.classList.add('popup-head');

  const title = document.createElement('h2');
  title.classList.add('popup-title');

  const closebtn = document.createElement('div');
  closebtn.classList.add('popup-close');

  const bar1 = document.createElement('span');
  bar1.classList.add('popup-bar');

  const bar2 = document.createElement('span');
  bar2.classList.add('popup-bar');

  const bar3 = document.createElement('span');
  bar3.classList.add('popup-bar');

  const image = document.createElement('img');
  image.classList.add('popup-project-image');

  const ContentText = document.createElement('p');
  ContentText.classList.add('popup-text');
  
  const ul = document.createElement('ul');
  ul.classList.add('popup-tech-container');

  const li1 = document.createElement('li');

  const li2 = document.createElement('li');

  const li3 = document.createElement('li');

  const li4 = document.createElement('li');

  const li5 = document.createElement('li');
  
  const li6 = document.createElement('li');
  
  const li7 = document.createElement('li');
  
  const li8 = document.createElement('li');
  
  const li9 = document.createElement('li');

  const btn1 = document.createElement('button');
  btn1.classList.add('btn1');

  const btn2 = document.createElement('button');
  btn1.classList.add('btn2');

  const btnRow = document.createElement('div');
  btn1.classList.add('btn-row');
  

}