<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pokemon = ref(null);
const loading = ref(false);

onMounted(async () => {
  try {
    loading = true;
    const name = route.params.name;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    pokemon.value = await res.json();
  } catch (err) {
    console.error('Erro ao buscar detalhes do Pokémon:', err);
  }
  finally {
    loading = false;
  }
});
</script>

<template>
  <div v-if="pokemon" class="max-w-4xl mx-auto py-10 px-4 " 
  :class="loading ? '' : 'animate__bounce animate__animated'"
  >
    <h1 class="text-3xl font-bold capitalize mb-4">{{ pokemon.name }}</h1>
    <img
      :src="pokemon.sprites.other['official-artwork'].front_default"
      :alt="pokemon.name"
      class="w-52 h-52 object-contain"
    />
    <p><strong>ID:</strong> {{ pokemon.id }}</p>
    <p><strong>XP:</strong> {{ pokemon.base_experience }}</p>
    <p><strong>Altura:</strong> {{ pokemon.height }}</p>
    <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
  </div>
  <div v-else class="text-center py-10 text-gray-600">
    Carregando detalhes do Pokémon...
  </div>
</template>
