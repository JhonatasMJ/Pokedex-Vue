<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();

const loading = ref(false);
const pokemon = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    const name = route.params.name;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    pokemon.value = await res.json();
  } catch (err) {
    console.error("Erro ao buscar detalhes do Pokémon:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main class="max-w-7xl px-4 mx-auto py-6">
    <Card v-if="pokemon" class="mx-auto shadow-sm pt-0">
      <div
        class="relative grid place-items-center gap-4 after:content-[''] after:absolute after:inset-0 after:bg-contain after:bg-no-repeat after:opacity-10 after:grayscale-100 after:rounded-xl after:z-0 after:bg-center rounded-t-2xl p-4"
        :class="`type-${pokemon.types[0].type.name}`"
      >
        <h1 class="text-center font-bold capitalize mb-4 text-5xl text-white">
          {{ pokemon.name }}
        </h1>
        <div class="flex gap-2 flex-wrap">
          <span
            v-for="(t, index) in pokemon.types"
            :key="index"
            class="px-6 py-1 text-base rounded-full text-white capitalize font-semibold bg-white/30"
          >
            {{ t.type.name }}
          </span>
        </div>
        <Button
          @click="router.back()"
          class="mb-4 cursor-pointer absolute z-50 top-4 left-4 bg-white/32 hover:bg-white/40"
          ><ChevronLeft />
        </Button>
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          :alt="pokemon.name"
          class="w-72 h-72 object-contain z-10 mx-auto relative"
        />
      </div>
      <CardContent class="flex flex-col gap-4">
        <p><strong>XP:</strong> {{ pokemon.base_experience }}</p>
        <p><strong>Altura:</strong> {{ pokemon.height }}</p>
        <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
      </CardContent>
    </Card>
  </main>
</template>
