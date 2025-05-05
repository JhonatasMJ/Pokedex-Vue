<script setup>
import { defineProps, defineEmits } from "vue";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const props = defineProps({
  pokemon: Object, // pokemon.types precisa estar presente como array
});

const emit = defineEmits(["select"]);
</script>

<template>
  <Card
    class="w-full cursor-pointer hover:scale-105 transition-transform shadow-sm hover:shadow-lg hover:border-2"
    @click="emit('select', pokemon)"
  >
    <CardHeader>
      
      <CardTitle
        class="capitalize text-2xl animate__slideInDown animate__animated"
      >
        {{ pokemon.name }}
      </CardTitle>
      <CardDescription>#{{ pokemon.id }}</CardDescription>

  
      <div class="flex gap-2 mt-2 flex-wrap">
        <span
          v-for="(t, index) in pokemon.types"
          :key="index"
          class="px-2 py-1 text-xs rounded-full text-white capitalize font-semibold"
          :class="`type-${t.type.name}`"
        >
          {{ t.type.name }}
        </span>
      </div>
    </CardHeader>

    <CardContent
      class="relative grid place-items-center gap-4
        after:content-[''] after:absolute after:inset-0
        after:bg-[url('./assets/pokeboll.png')] after:bg-contain after:bg-no-repeat after:opacity-20
        after:rounded-xl after:z-0 after:bg-right-bottom"
    >
      <img
        :src="pokemon.image"
        :alt="pokemon.name"
        class="w-52 h-52 object-contain relative z-10 animate__slideInLeft animate__animated"
      />
    </CardContent>
  </Card>
</template>

<style scoped>
/* Estilos para cada tipo de Pokémon */
.type-grass {
  background-color: #78C850;
}
.type-poison {
  background-color: #A040A0;
}
.type-fire {
  background-color: #F08030;
}
.type-water {
  background-color: #6890F0;
}
.type-bug {
  background-color: #A8B820;
}
.type-normal {
  background-color: #A8A878;
}
.type-electric {
  background-color: #F8D030;
}
.type-ground {
  background-color: #E0C068;
}
.type-fairy {
  background-color: #EE99AC;
}
.type-fighting {
  background-color: #C03028;
}
.type-psychic {
  background-color: #F85888;
}
.type-rock {
  background-color: #B8A038;
}
.type-ghost {
  background-color: #705898;
}
.type-ice {
  background-color: #98D8D8;
}
.type-dragon {
  background-color: #7038F8;
}
.type-dark {
  background-color: #705848;
}
.type-steel {
  background-color: #B8B8D0;
}
.type-flying {
  background-color: #A890F0;
}
</style>
