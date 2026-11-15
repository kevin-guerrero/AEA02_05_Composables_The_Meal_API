<script setup>
    import { ref } from 'vue';
    
    const inputSerie = ref('')
    const emit = defineEmits(['buscar'])

    function buscar() {
        emit('buscar', inputSerie.value.trim())
    }
</script>

<template>
    <input
    v-model="inputSerie"
    type="text" 
    placeholder="Cerca una serie"
    >
    <button @click="buscar()">Buscar</button>
</template>

<style scoped>
input,
button {
    padding: 0.7rem 0.9rem;
    border: 1px solid #c8cbd0;
    border-radius: 5px;
    font: inherit;
}

input {
    width: 280px;
    background: white;
}

button {
    margin-left: 0.5rem;
    border-color: #315da8;
    background: #315da8;
    color: white;
    cursor: pointer;
}

button:hover {
    background: #244a8a;
}
</style>