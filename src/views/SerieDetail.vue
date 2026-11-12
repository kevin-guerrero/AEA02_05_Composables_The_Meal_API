<script setup>
    import { useFetch } from '@/composables/useFetch';
import { onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const { data, error, load } = useFetch()

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

</template>