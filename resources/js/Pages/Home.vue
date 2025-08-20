<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue';
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

const props = defineProps<{
  frameworks: string[]
}>();

const page = usePage();
const userName = page.props.auth.user.name;
const title = computed(() => `Hello, ${userName}`);
</script>

<template>
  <AppLayout :title="title">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Frameworks:</h2>
    <ul class="space-y-2">
      <li v-for="framework in frameworks" :key="framework" class="text-lg text-gray-700">
        • {{ framework }}
      </li>
    </ul>
  </AppLayout>
</template>
