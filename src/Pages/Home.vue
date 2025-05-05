<script setup>
import Navbar from "@/components/Navbar.vue";

import { Button } from "@/components/ui/button";
import CardPoke from "@/components/CardPoke.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
</script>

<template>
  <main class="max-w-7xl px-4 mx-auto py-6">
    <h1 class="text-4xl font-bold mb-4">Pokédex</h1>
    <p class="text-gray-600 mb-6">
      Explore seu catálogo de Pokémon com a Pokédex interativa
    </p>

    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <div class="relative w-1/2">
        <Input
          type="text"
          v-model="searchQuery"
          placeholder="Buscar Pokémon..."
        />
      </div>

      <Select >
        <SelectTrigger class="w-[180px ]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple"> Apple </SelectItem>
            <SelectItem value="banana"> Banana </SelectItem>
            <SelectItem value="blueberry"> Blueberry </SelectItem>
            <SelectItem value="grapes"> Grapes </SelectItem>
            <SelectItem value="pineapple"> Pineapple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button @click="resetFilters" class="px-4 py-2"> Limpar filtros </Button>
    </div>

    <CardPoke />
  </main>
</template>
