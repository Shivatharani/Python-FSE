<template>

<div class="card">

<h1>

{{ course.name }}

</h1>

<p>

Course Code :

{{ course.code }}

</p>

<p>

Credits :

{{ course.credits }}

</p>

<p>

Grade :

{{ course.grade }}

</p>

<button

@click="enroll">

Enroll

</button>

</div>

</template>

<script setup>

import { useRoute,useRouter } from "vue-router";

import { useEnrollmentStore } from "../stores/enrollment";

const store=useEnrollmentStore();

const route=useRoute();

const router=useRouter();

const data=[

{id:1,name:"Web Technologies",code:"WT301",credits:4,grade:"A"},

{id:2,name:"Database Systems",code:"DB302",credits:3,grade:"A+"},

{id:3,name:"Operating Systems",code:"OS303",credits:4,grade:"B+"},

{id:4,name:"Artificial Intelligence",code:"AI304",credits:4,grade:"A"},

{id:5,name:"Cloud Computing",code:"CC305",credits:3,grade:"A"}

];

const course=data.find(

c=>c.id==route.params.id

);

function enroll(){

store.enroll(course);

router.push("/profile");

}

</script>