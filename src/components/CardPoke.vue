<script setup>
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { onMounted, ref } from "vue";

const pokemons = ref([]);

onMounted(async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"); // limite menor para testes
        const data = await response.json();

        // Adiciona o ID e a URL da imagem para cada Pokémon
        pokemons.value = data.results.map((pokemon) => {
            const id = pokemon.url.split("/").filter(Boolean).pop(); // extrai o ID da URL
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return {
                ...pokemon,
                id,
                image,
            };
        });
    } catch (error) {
        console.error("Erro ao buscar pokémons:", error);
    }
});
</script>

<template>
    <div class="grid lg:grid-cols-3 py-12 gap-4">

        <Card v-for="pokemon in pokemons" :key="pokemon.name" class="w-full">
            <CardHeader>
                <CardTitle class="capitalize text-2xl">{{ pokemon.name }}</CardTitle>
                <CardDescription>ID: {{ pokemon.id }}</CardDescription>
            </CardHeader>
            <CardContent
            class="relative grid place-items-center gap-4
            after:content-[''] after:absolute after:inset-0
            after:bg-[url('./assets/pokeboll.png')] after:bg-contain after:bg-no-repeat after:opacity-20
            after:rounded-xl after:z-0 after:bg-right-bottom"
            >
            <img :src="pokemon.image" :alt="pokemon.name" class="w-52 h-52 object-contain relative z-10" />
        </CardContent>
        
    </Card>
</div>
</template>
