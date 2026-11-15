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