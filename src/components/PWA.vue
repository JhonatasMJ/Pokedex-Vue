<script setup>
import { ref, onMounted } from 'vue';

const deferredPrompt = ref(null);
const showButton = ref(false);

// Escuta o evento `beforeinstallprompt`
onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // impede o prompt automático
    deferredPrompt.value = e;
    showButton.value = true; // mostra o botão
  });
});

// Ação ao clicar no botão
const instalarApp = async () => {
  if (!deferredPrompt.value) return;

  deferredPrompt.value.prompt();

  const { outcome } = await deferredPrompt.value.userChoice;
  if (outcome === 'accepted') {
    console.log('Usuário aceitou instalar o app');
  } else {
    console.log('Usuário recusou instalar o app');
  }

  deferredPrompt.value = null;
  showButton.value = false;
};
</script>

<template>
  <div v-if="showButton" class="fixed bottom-4 right-4 z-50">
    <button
      @click="instalarApp"
      class="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
    >
      Instalar App
    </button>
  </div>
</template>
