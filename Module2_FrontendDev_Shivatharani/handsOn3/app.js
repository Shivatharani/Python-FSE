import { courses } from "./data.js";

/* -----------------------------
   ES6+ Practice
------------------------------ */

// Destructuring

courses.forEach(course => {

    const { name, credits } = course;

    console.log(name, credits);

});

// map()

const formattedCourses = courses.map(course =>

    `${course.code} — ${course.name} (${course.credits} credits)`

);

console.log(formattedCourses);

// filter()

const fourCreditCourses = courses.filter(course =>

    course.credits >= 4

);

console.log("Courses with 4 or more credits:", fourCreditCourses.length);

// reduce()

const totalCredits = courses.reduce((total, course) =>

    total + course.credits

,0);

console.log("Total Credits:", totalCredits);

/* -----------------------------
   DOM Rendering
------------------------------ */

const grid = document.querySelector(".course-grid");

const totalCreditText = document.querySelector("#total-credits");

const selectedCourse = document.querySelector("#selected-course");

let currentCourses = [...courses];

function renderCourses(courseList){

    grid.innerHTML="";

    courseList.forEach(course=>{

        const article=document.createElement("article");

        article.className="course-card";

        article.dataset.id=course.id;

        article.innerHTML=`

            <h3>${course.name}</h3>

            <p><strong>Code:</strong> ${course.code}</p>

            <p><strong>Credits:</strong> ${course.credits}</p>

            <p><strong>Grade:</strong> ${course.grade}</p>

        `;

        grid.appendChild(article);

    });

    const total=courseList.reduce(

        (sum,course)=>sum+course.credits,

        0

    );

    totalCreditText.textContent=`Total Credits : ${total}`;

}

renderCourses(currentCourses);

/* -----------------------------
   Search
------------------------------ */

const search=document.querySelector("#search-courses");

search.addEventListener("input",(event)=>{

    const keyword=event.target.value.toLowerCase();

    const filtered=courses.filter(course=>

        course.name.toLowerCase().includes(keyword)

    );

    currentCourses=filtered;

    renderCourses(filtered);

});

/* -----------------------------
   Sort
------------------------------ */

const sortBtn=document.querySelector("#sort-btn");

sortBtn.addEventListener("click",()=>{

    currentCourses.sort(

        (a,b)=>b.credits-a.credits

    );

    renderCourses(currentCourses);

});

/* -----------------------------
   Event Delegation
------------------------------ */

grid.addEventListener("click",(event)=>{

    const card=event.target.closest(".course-card");

    if(!card) return;

    const id=Number(card.dataset.id);

    const course=courses.find(c=>c.id===id);

    selectedCourse.textContent=

        `Selected Course : ${course.name} | Grade : ${course.grade}`;

});