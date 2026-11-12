import { ref } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const load = async (url) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Error en la petició");
      data.value = await res.json();
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, load };
}
