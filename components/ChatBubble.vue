<script setup lang="ts">
// @ts-expect-error I couldn't find any types for vue 3 markdownit
import Markdown from "vue3-markdown-it";
import type { Message, User } from "@/types";
defineProps<{
  message?: Message;
  user?: User;
  myMessage?: boolean;
}>();
</script>
<template>
</template>
<style scoped>
</style>
