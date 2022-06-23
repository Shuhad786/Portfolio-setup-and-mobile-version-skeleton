const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const popupopen = document.querySelector('.button');
const popupopen2 = document.querySelector('.button2');
const popupopen3 = document.querySelector('.button3');
const popupopen4 = document.querySelector('.button4');

const maincontainer = document.querySelector('.mobile-container');

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
  imgDiv: './images/Rectangle70.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  techstack1: 'html',
  techstack2: 'Ruby on rails',
  techstack3: 'css',
  techstack4: 'Github',
}];

const ContainerPopup = document.querySelector('.popup');

for (let i = 0; i < PopupArray.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('popup-container');

  const head = document.createElement('div');
  head.classList.add('popup-head');

  const title = document.createElement('h2');
  title.classList.add('popup-title');
  title.innerHTML = PopupArray[i].title;

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
  image.src = PopupArray[i].img;

  const ContentText = document.createElement('p');
  ContentText.classList.add('popup-text');
  ContentText.innerHTML = PopupArray[i].text;

  const imageDivider = document.createElement('img');
  imageDivider.classList.add('popup-divider');
  imageDivider.src = PopupArray[i].imgDiv;

  const imageDivider2 = document.createElement('img');
  imageDivider2.classList.add('popup-divider');
  imageDivider2.src = PopupArray[i].imgDiv;

  const imageDivider3 = document.createElement('img');
  imageDivider3.classList.add('popup-divider');
  imageDivider3.src = PopupArray[i].imgDiv;

  const imageDivider4 = document.createElement('img');
  imageDivider4.classList.add('popup-divider');
  imageDivider4.src = PopupArray[i].imgDiv;

  const imageDivider5 = document.createElement('img');
  imageDivider5.classList.add('popup-divider');
  imageDivider5.src = PopupArray[i].imgDiv;

  const ul = document.createElement('ul');
  ul.classList.add('popup-tech-container');

  const li1 = document.createElement('li');
  li1.appendChild(imageDivider);

  const li2 = document.createElement('li');
  li2.innerHTML = PopupArray[i].techstack1;

  const li3 = document.createElement('li');
  li3.appendChild(imageDivider2);

  const li4 = document.createElement('li');
  li4.innerHTML = PopupArray[i].techstack2;

  const li5 = document.createElement('li');
  li5.appendChild(imageDivider3);

  const li6 = document.createElement('li');
  li6.innerHTML = PopupArray[i].techstack3;

  const li7 = document.createElement('li');
  li7.appendChild(imageDivider4);

  const li8 = document.createElement('li');
  li8.classList.add('Git');
  li8.innerHTML = PopupArray[i].techstack4;

  const li9 = document.createElement('li');
  li9.classList.add('Git');
  li9.appendChild(imageDivider5);

  const btn1 = document.createElement('button');
  btn1.classList.add('btn1');

  const btn2 = document.createElement('button');
  btn2.classList.add('btn2');

  const btnRow = document.createElement('div');
  btnRow.classList.add('btn-row');

  ContainerPopup.appendChild(card).appendChild(head).appendChild(title);
  ContainerPopup.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar1);
  ContainerPopup.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar2);
  ContainerPopup.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar3);
  ContainerPopup.appendChild(card).appendChild(image);
  ContainerPopup.appendChild(card).appendChild(ContentText);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li1);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li2);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li3);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li4);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li5);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li6);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li7);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li8);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li9);
  ContainerPopup.appendChild(card).appendChild(btn1);
  ContainerPopup.appendChild(card).appendChild(btn2);
  ContainerPopup.appendChild(card).appendChild(btnRow);
}
const popupwindow = document.querySelector('.popup-container');
const popupclose = document.querySelector('.popup-close');

popupopen.addEventListener('click', () => {
  popupwindow.classList.toggle('show'); // here
  maincontainer.style.filter = 'blur(50px)';
});

popupopen2.addEventListener('click', () => {
  popupwindow.classList.toggle('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen3.addEventListener('click', () => {
  popupwindow.classList.toggle('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen4.addEventListener('click', () => {
  popupwindow.classList.toggle('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupclose.addEventListener('click', () => { // here
  popupwindow.classList.remove('show');
  maincontainer.style.filter = 'blur(0px)';
});