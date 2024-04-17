let arr = [
    {
        id: 1,
        image: "images/ng_owner.png",
        name:"Abhishek Gupta",
        job:"Founder & EX-CEO",
        description:"Genius is equally distributed, opportunities are not. Imagine, getting bright youth from rural areas, youth bereft of any opportunities. And we train them rigorously, get them aspirational jobs, and let them pay for this. See the economic merit of this?"

    },
      {
        id: 2,
        image: "images/jeff.jpeg",
        name:"Jeff Bezos",
        job:"CEO @Amazon",
        description:"In spring 1994, Bezos read that web usage was growing at a rate of 2300% a year and eventually decided to establish an online bookstore. He and his then-wife, MacKenzie Scott, left their jobs at D. E. Shaw and founded Amazon in a rented garage in Bellevue, Washington on July 5, 1994, after writing its business plan on a cross-country drive from New York City to Seattle"

    },
      {
        id: 3,
        image: "images/mentor.png",
        name:"Shivansh Rawat",
        job:"Software developer",
        description:"I'am from Srinagar Garhwal Uttarakhand ,I switched after completing graduation from Science to a Frontend developer. Seeing how a person can grow in the software industry if he/she puts efforts. Learning coding was a thing I always fascinated I was curious how people design these application that simply make our life better, now I feel incredibly enthusiastic that I was able to learn and implement that knowledge in making real time projects ."

    },
      {
        id: 4,
        image: "images/prem.png",
        name:"Prem Yadav",
        job:"Software Developer",
        description:"A software developer designs, builds, and maintains software applications using programming languages like Java, Python, C++, or JavaScript. They work in teams to develop solutions, from initial design to deployment and maintenance, requiring problem-solving skills and attention to detail. Continuous learning is crucial in this fast-paced industry."

    },
      {
        id: 5,
        image: "images/mahi.jpg",
        name:"Manoj Kumar Sah",
        job:"Frontend Developer",
        description:"I am specializes in building user interfaces for websites and web applications. Using technologies such as HTML, CSS, and JavaScript to create interactive and visually appealing experiences for users. Frontend developers work closely with designers and backend developers to ensure seamless integration of the user interface with the underlying functionality of the application."

    },
]


const photo = document.querySelector("#person-img");

// console.log(photo)
const author = document.querySelector(".name");
// console.log(author)
const job = document.querySelector(".job");
const info = document.querySelector(".description");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const random = document.querySelector(".random")


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {

  showPerson();
});



function showPerson() {
  const item = arr[currentItem];
  photo.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.description;
}



right.addEventListener("click", () => {
  currentItem++;
  if (currentItem > arr.length - 1) {
    currentItem = 0;
  }
  showPerson();
});



left.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = arr.length - 1;
  }
  showPerson();
});


random.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * arr.length);
  showPerson();

  console.log(currentItem);
});