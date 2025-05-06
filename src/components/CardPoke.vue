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
  pokemon: Object,
});

const emit = defineEmits(["select"]);
</script>

<template>
  <Card
    class="w-full cursor-pointer hover:scale-105 transition-transform shadow-sm hover:shadow-lg hover:border-2"
    :class="`type-${pokemon.types[0].type.name}`"
    @click="emit('select', pokemon)"
  >
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle
          class="capitalize text-2xl animate__slideInDown animate__animated"
        >
          <p>{{ pokemon.name }}</p>
        </CardTitle>
        <CardDescription class="text-4xl text-white"
          >#{{ pokemon.id }}</CardDescription
        >
      </div>

      <div class="flex gap-2 mt-2 flex-wrap">
        <span
          v-for="(t, index) in pokemon.types"
          :key="index"
          class="px-2 py-1 text-xs rounded-full text-white capitalize font-semibold bg-white/40"
        >
          {{ t.type.name }}
        </span>
      </div>
    </CardHeader>

    <CardContent class="relative grid place-items-center gap-4">
      <img
        :src="pokemon.image"
        :alt="pokemon.name"
        class="w-52 h-52 object-contain relative z-10 animate__slideInLeft animate__animated"
      />
    </CardContent>
  </Card>
</template>
