<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import CardPoke from '@/components/CardPoke.vue';
import {Input} from '@/components/ui/input';
import Pwa from '@/components/PWA.vue';

const pokemons = ref([]);
const procurarPokemon = ref('');
const router = useRouter();
const loading = ref(false);

onMounted(async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const data = await res.json();
  try {
    loading.value = true;
    pokemons.value = data.results.map((pokemon) => {
    const id = pokemon.url.split('/').filter(Boolean).pop();
    return {
      ...pokemon,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
    });
  } finally {
    loading.value = false;
  }
});

const pokemonsFiltrados = computed(() => {
  if (!procurarPokemon.value) return pokemons.value;
  return pokemons.value.filter((p) =>
    p.name.toLowerCase().includes(procurarPokemon.value.toLowerCase())
  );
});

const verDetalhes = (pokemon) => {
  router.push({ name: 'Pokemon', params: { name: pokemon.name } });
};
</script>

<template>
  <main class="max-w-7xl px-4 mx-auto py-6">
    <Pwa/>
    <h1 class="text-4xl font-bold mb-4">Pokédex</h1>
    <Input
      v-model="procurarPokemon"
      placeholder="Buscar Pokémon"
      class="mb-4"
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <CardPoke
        v-for="pokemon in pokemonsFiltrados"
        :key="pokemon.name"
        :pokemon="pokemon"
        @select="verDetalhes"
        :loading="loading"
      />
    </div>
  </main>
</template>