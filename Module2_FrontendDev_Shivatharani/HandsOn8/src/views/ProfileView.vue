<template>

<div class="profile-card">

<h1>

Student Profile

</h1>

<br>

<h3>

Enrolled Courses

</h3>

<div

class="course-item"

v-for="course in store.enrolledCourses"

:key="course.id">

{{ course.name }}

-

{{ course.credits }}

Credits

</div>

<br>

<h2>

Total Credits :

{{ store.totalCredits }}

</h2>

</div>

</template>

<script setup>

import { useEnrollmentStore } from "../stores/enrollment";

const store=useEnrollmentStore();

</script>