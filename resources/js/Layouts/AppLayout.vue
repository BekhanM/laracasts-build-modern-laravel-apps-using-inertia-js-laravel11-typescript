<script setup lang="ts">
import Nav from '@/Shared/Nav.vue';

interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">{{ title }}</h1>
      <Nav />

      <div class="mt-8 p-6 bg-white rounded-lg shadow-md">
        <slot />
      </div>
    </div>
  </div>
</template>
