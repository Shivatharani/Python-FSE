import { courses } from "./data.js";

/* =====================================================
   TASK 45
   Fetch User using Promise (.then())
===================================================== */

function fetchUser(id) {

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        .then(response => response.json())

        .then(user => {

            console.log("Promise User :", user.name);

            return user;

        });

}

fetchUser(1);

/* =====================================================
   TASK 46
   Async / Await
===================================================== */

async function fetchUserAsync(id) {

    try {

        const response = await fetch(

            `https://jsonplaceholder.typicode.com/users/${id}`

        );

        const user = await response.json();

        console.log("Async User :", user.name);

    }

    catch (error) {

        console.error(error);

    }

}

fetchUserAsync(2);

/* =====================================================
   TASK 47
   Simulate Delay
===================================================== */

function fetchAllCourses() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(courses);

        },1000);

    });

}

/* =====================================================
   DOM
===================================================== */

const courseGrid=document.querySelector(".course-grid");

const loading=document.querySelector("#loading-courses");

const totalCredits=document.querySelector("#total-credits");

/* =====================================================
   Render Courses
===================================================== */

function renderCourses(courseList){

    courseGrid.innerHTML="";

    courseList.forEach(course=>{

        const article=document.createElement("article");

        article.className="course-card";

        article.innerHTML=`

            <h3>${course.name}</h3>

            <p><strong>Code :</strong> ${course.code}</p>

            <p><strong>Grade :</strong> ${course.grade}</p>

            <span>${course.credits} Credits</span>

        `;

        courseGrid.appendChild(article);

    });

    const total=courseList.reduce(

        (sum,course)=>sum+course.credits,

        0

    );

    totalCredits.textContent=`Total Credits : ${total}`;

}

/* =====================================================
   TASK 48
===================================================== */

async function loadCourses(){

    loading.style.display="block";

    const data=await fetchAllCourses();

    loading.style.display="none";

    renderCourses(data);

}

loadCourses();

/* =====================================================
   TASK 49
   Promise.all
===================================================== */

Promise.all([

    fetch("https://jsonplaceholder.typicode.com/users/1")

    .then(res=>res.json()),

    fetch("https://jsonplaceholder.typicode.com/users/2")

    .then(res=>res.json())

])

.then(users=>{

    const userContainer=document.querySelector("#users");

    userContainer.innerHTML="";

    users.forEach(user=>{

        userContainer.innerHTML+=`

        <div class="user-card">

            <h3>${user.name}</h3>

            <p>${user.email}</p>

        </div>

        `;

    });

});

/* =====================================================
   TASK 50
   Reusable Fetch Function
===================================================== */

async function apiFetch(url){

    const response=await fetch(url);

    if(!response.ok){

        throw new Error("Unable to fetch data.");

    }

    return await response.json();

}

const spinner=document.querySelector("#spinner");

const notificationList=document.querySelector("#notification-list");

const errorBox=document.querySelector("#error-message");

const retryBtn=document.querySelector("#retry-btn");

/* =====================================================
   TASK 51 & 52
===================================================== */

async function loadNotifications(){

    spinner.style.display="block";

    notificationList.innerHTML="";

    errorBox.style.display="none";

    retryBtn.style.display="none";

    try{

        const posts=await apiFetch(

        "https://jsonplaceholder.typicode.com/posts?_limit=5"

        );

        spinner.style.display="none";

        posts.forEach(post=>{

            notificationList.innerHTML+=`

            <div class="notification">

                <h3>${post.title}</h3>

                <p>${post.body}</p>

            </div>

            `;

        });

    }

    catch(error){

        spinner.style.display="none";

        errorBox.style.display="block";

        errorBox.innerHTML=`

        <strong>⚠ ${error.message}</strong>

        `;

        retryBtn.style.display="inline-block";

    }

}

loadNotifications();

/* =====================================================
   TASK 53
   Simulate Error
===================================================== */

async function simulateError(){

    try{

        await apiFetch(

        "https://jsonplaceholder.typicode.com/nonexistent"

        );

    }

    catch(error){

        console.log("404 Error Demonstrated");

    }

}

simulateError();

/* =====================================================
   TASK 54
===================================================== */

retryBtn.addEventListener("click",()=>{

    loadNotifications();

});

/* =====================================================
   TASK 55
   Axios Interceptor
===================================================== */

axios.interceptors.request.use(config=>{

    console.log(

        "API Call Started :",

        config.url

    );

    return config;

});

/* =====================================================
   TASK 56
===================================================== */

async function axiosFetch(url){

    const response=await axios.get(url);

    return response.data;

}

/* =====================================================
   TASK 57
===================================================== */

async function loadAxiosPosts(){

    const container=document.querySelector("#axios-posts");

    container.innerHTML="";

    try{

        const response=await axios.get(

        "https://jsonplaceholder.typicode.com/posts",

        {

            params:{

                userId:1

            }

        }

        );

        response.data.slice(0,5).forEach(post=>{

            container.innerHTML+=`

            <div class="notification">

                <h3>${post.title}</h3>

                <p>${post.body}</p>

            </div>

            `;

        });

    }

    catch(error){

        container.innerHTML="<p>Unable to load Axios posts.</p>";

    }

}

loadAxiosPosts();

/* =====================================================
   TASK 58
===================================================== */

axiosFetch(

"https://jsonplaceholder.typicode.com/users/1"

)

.then(user=>{

    console.log("Axios User :",user.name);

});

/* =====================================================

TASK 59

FETCH vs AXIOS

1. Fetch is built into browsers.
   Axios is an external library.

2. Fetch requires response.ok checking.
   Axios throws errors automatically.

3. Fetch requires response.json().
   Axios automatically parses JSON.

===================================================== */

