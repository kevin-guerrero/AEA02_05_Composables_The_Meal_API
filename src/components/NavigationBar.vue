<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink class="home-link" to="/">Inici</RouterLink>
        <h1>Series</h1>
    </nav>
</template>

<style scoped>
nav {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 1rem;
    background: #252a34;
    color: white;
}

h1 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
}

a {
    color: white;
    text-decoration: none;
}

.home-link {
    justify-self: start;
}

a:hover {
    text-decoration: underline;
}
</style>