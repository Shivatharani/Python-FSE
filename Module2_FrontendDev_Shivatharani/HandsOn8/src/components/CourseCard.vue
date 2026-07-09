<template>

<div class="card">

<h2>{{ name }}</h2>

<p><b>Code:</b> {{ code }}</p>

<p><b>Credits:</b> {{ credits }}</p>

<p><b>Grade:</b> {{ grade }}</p>

<RouterLink :to="'/courses/'+id">

<button>

View Details

</button>

</RouterLink>

<button @click="$emit('enroll')">

Enroll

</button>

</div>

</template>

<script setup>

defineProps({

id:Number,

name:String,

code:String,

credits:Number,

grade:String

});

</script>

<style scoped>

.card{

transition:.3s;

}

.card:hover{

transform:scale(1.03);

}

</style>