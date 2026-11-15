<script setup>
    const props = defineProps({
        serie: Object,
    })
</script>

<template>
    <article>
        <RouterLink :to="{ name: 'serie-detail', params: { id: props.serie.id } }">
            <img
                :src="props.serie.image.original"
                :alt="`Pòster de ${props.serie.name}`"
            >
            <h2>{{ props.serie.name }}</h2>
        </RouterLink>
        <p>Valoración: {{ props.serie.rating?.average ?? 'Sense valoració' }}</p>
    </article>
</template>

<style scoped>
article {
    height: 100%;
    padding: 1rem;
    border: 1px solid #e0e2e6;
    border-radius: 8px;
    background: white;
    text-align: center;
}

a {
    text-decoration: none;
}

a:hover h2 {
    color: #315da8;
}

img {
    width: 100%;
    height: 260px;
    border-radius: 5px;
    object-fit: cover;
}

h2 {
    margin: 0.8rem 0;
    font-size: 1.1rem;
}

p {
    margin-bottom: 0;
    color: #555;
}
</style>