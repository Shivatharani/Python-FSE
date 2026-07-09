<template>

<h1>

Courses

</h1>

<input

v-model="searchTerm"

placeholder="Search course">

<div class="cards">

<CourseCard

v-for="course in filteredCourses"

:key="course.id"

:id="course.id"

:name="course.name"

:code="course.code"

:credits="course.credits"

:grade="course.grade"

@enroll="store.enroll(course)"

/>

</div>

</template>

<script setup>

import { ref,computed,onMounted } from "vue";

import CourseCard from "../components/CourseCard.vue";

import { useEnrollmentStore } from "../stores/enrollment";

const store=useEnrollmentStore();

const searchTerm=ref("");

const courses=ref([]);

onMounted(()=>{

courses.value=[

{

id:1,

name:"Web Technologies",

code:"WT301",

credits:4,

grade:"A"

},

{

id:2,

name:"Database Systems",

code:"DB302",

credits:3,

grade:"A+"

},

{

id:3,

name:"Operating Systems",

code:"OS303",

credits:4,

grade:"B+"

},

{

id:4,

name:"Artificial Intelligence",

code:"AI304",

credits:4,

grade:"A"

},

{

id:5,

name:"Cloud Computing",

code:"CC305",

credits:3,

grade:"A"

}

];

});

const filteredCourses=computed(()=>{

return courses.value.filter(course=>

course.name.toLowerCase()

.includes(searchTerm.value.toLowerCase())

);

});

</script>