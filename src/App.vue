<script setup>
    import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
    <NavigationBar></NavigationBar>
    <RouterView></RouterView>
</template>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: #f4f5f7;
    color: #242424;
    font-family: Arial, Helvetica, sans-serif;
}

a {
    color: inherit;
}
</style>
