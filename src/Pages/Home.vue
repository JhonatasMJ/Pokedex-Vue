<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import CardPoke from '@/components/CardPoke.vue';
import {Input} from '@/components/ui/input';
import {Search} from 'lucide-vue-next';


const pokemons = ref([]);
const procurarPokemon = ref('');
const router = useRouter();
const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;

    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await res.json();

    const detalhes = await Promise.all(
      data.results.map(async (pokemon) => {
        const resp = await fetch(pokemon.url);
        const detalhesPokemon = await resp.json();

        return {
          id: detalhesPokemon.id,
          name: detalhesPokemon.name,
          image: detalhesPokemon.sprites.other['official-artwork'].front_default,
          types: detalhesPokemon.types, 
        };
      })
    );

    pokemons.value = detalhes;
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
<div class="flex items-center gap-3 mb-4">
  <img class="w-12 h-12 animate__rotateIn animate__infinite	infinite animate_animated  " src="../assets/pokeboll.png" alt="Logo">
  <h1 class="text-4xl font-bold">Pokédex</h1>
</div>
    <p class="mb-4 text-zinc-800 text-md">Encontre seus Pokémon favoritos.</p>

    <div class="relative w-full mb-6 items-center">
    <Input 
    v-model="procurarPokemon"
    id="search" 
    type="text" 
    placeholder="Digite o nome do Pokémon" 
    class="pl-10 py-5 " />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground" />
    </span>
  </div>

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