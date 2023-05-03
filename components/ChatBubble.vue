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
    <div class="chat">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
        </div>
      </div>
      <div class="chat-header mb-2">
      </div>
      <div class="chat-bubble py-0 prose prose-sm bg-white dark:bg-gray-900 max-w-max w-full">
      </div>
    </div>
</template>
<style scoped>
</style>
