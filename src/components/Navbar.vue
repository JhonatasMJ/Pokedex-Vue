<script setup>
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-vue-next'
</script>

<template>
    <header class=" bg-white border-b sticky top-0 z-50 px-4">
      <div class="max-w-7xl mx-auto flex h-16 items-center justify-between ">
  
        <img class="w-8 h-8" src="../assets/pokeboll.png" alt="Logo">
  
   
        <nav class="hidden md:flex space-x-6">
          <RouterLink
                  to="/"
                  class="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                Início
                </RouterLink>
          <a href="#" class="text-sm font-medium text-muted-foreground hover:text-primary">Sobre</a>
          <a href="#" class="text-sm font-medium text-muted-foreground hover:text-primary">Serviços</a>
          <a href="#" class="text-sm font-medium text-muted-foreground hover:text-primary">Contato</a>
        </nav>
  
   
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="md:hidden">
              <MenuIcon class="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div class="flex flex-col space-y-4 mt-6">
              <a href="#" class="text-base font-medium text-foreground hover:text-primary">Início</a>
              <a href="#" class="text-base font-medium text-foreground hover:text-primary">Sobre</a>
              <a href="#" class="text-base font-medium text-foreground hover:text-primary">Serviços</a>
              <a href="#" class="text-base font-medium text-foreground hover:text-primary">Contato</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  </template>
  

  