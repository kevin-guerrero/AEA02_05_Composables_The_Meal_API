<script setup>
    import { computed, onMounted } from 'vue';
    import SearchBar from '@/components/SearchBar.vue';
    import SerieCard from '@/components/SerieCard.vue';
    import { useFetch } from '@/composables/useFetch';

    const { data, error, loading, load } = useFetch()
    
    // Normaliza las series: extrae `item.show` en los resultados de búsqueda o usa el elemento directamente.
    const series = computed(() =>
        (data.value || []).map((item) => item.show || item)
    )

    // Comprovar que es un arrray y pilalr las 12 primeras series
    async function cargarSeries() {
        await load('https://api.tvmaze.com/shows?page=0')
        if (Array.isArray(data.value)) {
            data.value = data.value.slice(0, 12)
        }
    }

    onMounted(cargarSeries)

    async function buscarSeries(texto) {
        const busquedad = texto.trim()

        if(!busquedad) {
            await cargarSeries()
            return
        }

        await load(
            `https://api.tvmaze.com/search/shows?q=${busquedad}`
        )
    }
</script>

<template>
    <main>
        <h1>Buscar series</h1>
        <SearchBar @buscar="buscarSeries"></SearchBar>

        <p v-if="loading">Buscando...</p>
        <p v-else-if="error">Error al cargar las series: {{ error.message }}</p>

        <section v-else>
            <SerieCard
                v-for="serie in series"
                :key="serie.id"
                :serie="serie"
            />
        </section>
    </main>
</template>