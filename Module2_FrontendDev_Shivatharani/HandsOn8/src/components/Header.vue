<template>
<nav>

<div>
<RouterLink to="/">Home</RouterLink>

<RouterLink to="/courses">Courses</RouterLink>

<RouterLink to="/profile">Profile</RouterLink>

</div>

<div>

Enrolled :
{{ store.enrolledCourses.length }}

</div>

</nav>

</template>

<script setup>

import { RouterLink } from "vue-router";

import { useEnrollmentStore } from "../stores/enrollment";

const store = useEnrollmentStore();

</script>