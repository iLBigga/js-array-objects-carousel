// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
];

const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');
const ulElement = document.querySelector('.slides-wrapper');

const slidesArrow = [];

for (i = 0; i < slides.length; i++) {
	const arrayPosition = slides[i];

	const liElement = document.createElement('li');
	liElement.className = 'slide';

	if(i === 0){
		liElement.classList.add('active');
	};

	liElement.innerHTML = 
	`
	<img src="${arrayPosition.url}" alt="">
    <div class="slide__content">
        <h3 class="slide__title">${arrayPosition.title}</h3>
        <p class="slide__description">${arrayPosition.description}</p>
    </div>	
	`;

	slidesArrow.push(liElement);
	ulElement.append(liElement);
};

let x = 0;

arrowNext.addEventListener('click', function(){

	const length = slidesArrow.length-1;

	const activeSlide = slidesArrow[x]

	activeSlide.classList.remove('active')
	if (x < length) {
		x++
	} else {
		x = 0
	}

	const nextSlide = slidesArrow[x];
	nextSlide.classList.add('active');
})

arrowPrev.addEventListener('click', function(){

	const length = slidesArrow.length-1;

	const activeSlide = slidesArrow[x]

	activeSlide.classList.remove('active')
	if (x > 0) {
		x--
	} else {
		x = length
	}

	const nextSlide = slidesArrow[x];
	nextSlide.classList.add('active');
})
