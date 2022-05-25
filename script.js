const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.hamburger-menu');

hamBurger.addEventListener('click', () => {
  hamBurger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});


// creating first card item i.e grid project

const projects = [{
  chess: './images/chess-bg.png', 
  image: './images/chinedu-ezea-picture.png',
  name: 'Chinedu Ezea',
  dash: '',
  qualification: 'Chinedu is a doctor of philosophy at Nnamdi Azikiwe University',
  description: 'He is a mathematician and a professional editors with several publications in high impact factor journals', 
},
{
  chess: './images/chess-bg.png', 
  image: './images/chinedu-ezea-picture.png',
  name: 'Chinedu Ezea',
  dash: '',
  qualification: 'Chinedu is a doctor of philosophy at Nnamdi Azikiwe University',
  description: 'He is a mathematician and a professional editors with several publications in high impact factor journals', 
},
{
  chess: './images/chess-bg.png',  
  image: './images/chinedu-ezea-picture.png',
  name: 'Chinedu Ezea',
  dash: '',
  qualification: 'Chinedu is a doctor of philosophy at Nnamdi Azikiwe University',
  description: 'He is a mathematician and a professional editors with several publications in high impact factor journals', 
},
{
  chess: './images/chess-bg.png', 
  image: './images/chinedu-ezea-picture.png',
  name: 'Chinedu Ezea',
  dash: '',
  qualification: 'Chinedu is a doctor of philosophy at Nnamdi Azikiwe University',
  description: 'He is a mathematician and a professional editors with several publications in high impact factor journals', 
},
{ 
  chess: './images/chess-bg.png', 
  image: './images/chinedu-ezea-picture.png',
  name: 'Chinedu Ezea',
  dash: '',
  qualification: 'Chinedu is a doctor of philosophy at Nnamdi Azikiwe University',
  description: 'He is a mathematician and a professional editors with several publications in high impact factor journals', 
},
{ 
  chess: './images/chess-bg.png', 
  image: './images/chinedu-ezea-picture.png',
  name: 'Chinedu Ezea',
  dash: '',
  qualification: 'Chinedu is a doctor of philosophy at Nnamdi Azikiwe University',
  description: 'He is a mathematician and a professional editors with several publications in high impact factor journals', 
},
];

const sectionFeaturedElement = document.getElementById('featured-speakers-id');
sectionFeaturedElement.className = 'featured-speakers';

for (let i = 0; i < projects.length; i += 1) {
  const gridProject = document.createElement('div');
  gridProject.className = 'flex-container featured-grid-item';
  gridProject.style.backgroundImage  
  sectionFeaturedElement.appendChild(gridProject);
}



Array.from(sectionFeaturedElement.children).forEach((child, index) => {
  child.innerHTML = `
  <div class="chess" style="background-image: url(${projects[index].chess});">
  <div class="chinedu-image" style="background-image: url(${projects[index].image});"></div></div> 
  <div class="tutors-info"><h4>${projects[index].name}</h4>
  <i class="qualification">${projects[index].qualification}</i>
  <hr class="qualification-dash">
  <p>${projects[index].description}</p>
</div>   
`;
});

{/* <div class="chess" style="background-image: url(${projects[index].chess});"></div> */}