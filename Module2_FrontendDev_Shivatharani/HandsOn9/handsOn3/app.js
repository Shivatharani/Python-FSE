import { courses } from "./data.js";

const grid = document.querySelector(".course-grid");
const totalCreditText = document.querySelector("#total-credits");
const selectedCourse = document.querySelector("#selected-course");
const search = document.querySelector("#search-courses");
const searchResults = document.querySelector("#search-results");
const sortBtn = document.querySelector("#sort-btn");

let currentCourses = [...courses];

function renderCourses(courseList) {
    grid.innerHTML = "";

    courseList.forEach((course) => {
        const article = document.createElement("article");
        article.className = "course-card";
        article.dataset.id = course.id;
        article.tabIndex = 0;
        article.setAttribute("role", "button");
        article.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Code:</strong> ${course.code}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Grade:</strong> ${course.grade}</p>
        `;

        article.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                article.click();
            }
        });

        grid.appendChild(article);
    });

    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCreditText.textContent = `Total Credits : ${total}`;
    searchResults.textContent = `${courseList.length} courses found`;
}

renderCourses(currentCourses);

search.addEventListener("input", (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = courses.filter((course) => course.name.toLowerCase().includes(keyword));

    currentCourses = filtered;
    renderCourses(filtered);
});

sortBtn.addEventListener("click", () => {
    currentCourses.sort((a, b) => b.credits - a.credits);
    renderCourses(currentCourses);
});

grid.addEventListener("click", (event) => {
    const card = event.target.closest(".course-card");

    if (!card) return;

    const id = Number(card.dataset.id);
    const course = courses.find((c) => c.id === id);

    selectedCourse.textContent = `Selected Course : ${course.name} | Grade : ${course.grade}`;
});