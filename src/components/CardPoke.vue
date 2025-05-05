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
    class="w-full cursor-pointer hover:scale-105 transition-transform"
    @click="emit('select', pokemon)"
  >
    <CardHeader>
      <CardTitle class="capitalize text-2xl animate__slideInDown animate__animated">{{ pokemon.name }}</CardTitle>
      <CardDescription>ID: {{ pokemon.id }}</CardDescription>
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
