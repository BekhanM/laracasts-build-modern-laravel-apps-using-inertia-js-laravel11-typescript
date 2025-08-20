<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <nav>
    <ul>
      <li>
        <Link href="/" :class="{ 'font-bold underline text-black': $page.component === 'Home' }"
          >Home</Link
        >
      </li>
      <li>
        <Link
          href="/users"
          :class="{ 'font-bold underline text-black': $page.component === 'Users' }"
          >Users</Link
        >
      </li>
      <li>
        <Link
          href="/settings"
          :class="{ 'font-bold underline text-black': $page.component === 'Settings' }"
          >Settings</Link
        >
      </li>
      <li>
        <Link
          href="/logout"
          :class="{ 'font-bold underline text-black': $page.component === 'Logout' }"
          method="post"
          as="button"
          >Logout</Link
        >
      </li>
    </ul>
  </nav>
</template>
