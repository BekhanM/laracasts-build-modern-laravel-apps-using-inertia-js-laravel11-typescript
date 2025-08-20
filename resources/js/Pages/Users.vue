<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'

interface Props {
  time?: string
}

defineProps<Props>()
</script>

<template>
  <AppLayout title="Users">
    <p class="text-lg text-gray-700 mb-4">The current time is: <span class="font-semibold text-blue-600">{{ time }}</span></p>

    <Link 
      href="/users" 
      class="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-200" 
      preserve-scroll
    >
      Refresh
    </Link>
  </AppLayout>
</template>
