<script setup>
    import { useFetch } from '@/composables/useFetch';
    import { onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const { data, error, loading, load } = useFetch()

    const loadSerie = async () => {
        const id = route.params.id
        if(!id) return
        await load(`https://api.tvmaze.com/shows/${id}`)
    }

    onMounted(loadSerie)

    watch(
        () => route.params.id,
        () => {
            loadSerie()
        }
    )
</script>

<template>
    <p v-if="loading">Carregant sèrie...</p>
    <p v-else-if="error">Error en carregar la sèrie: {{ error.message }}</p>
    <p v-else-if="!data">No s'ha trobat la sèrie</p>

    <article v-else>
        <h1>{{ data.name }}</h1>

        <img
            :src="data.image.original"
            :alt="`Póster de ${data.name}`"
        >

        <div v-if="data.summary" v-html="data.summary"></div>
        <p v-else>No hi ha cap descripció disponible</p>

        <section>
            <h2>Información</h2>
            <ul>
                <li v-if="data.genres?.length"><strong>Géneros:</strong> {{ data.genres.join(', ') }}</li>
                <li v-if="data.status"><strong>Estado:</strong> {{ data.status }}</li>
                <li v-if="data.premiered"><strong>Estreno:</strong> {{ data.premiered }}</li>
                <li v-if="data.ended"><strong>Finalizada:</strong> {{ data.ended }}</li>
                <li v-if="data.rating?.average"><strong>Valoración:</strong> {{ data.rating.average }}/10</li>
                <li v-if="data.network?.name || data.webChannel?.name">
                    <strong>Cadena:</strong> {{ data.network?.name || data.webChannel?.name }}
                </li>
            </ul>
        </section>

        </article>
</template>