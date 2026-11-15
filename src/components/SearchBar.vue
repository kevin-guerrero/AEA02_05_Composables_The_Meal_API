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