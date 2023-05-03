<script setup lang="ts">
import { nanoid } from "nanoid";
import { Message, User } from "~~/types";
const props = withDefaults(
  defineProps<{
    messages: Message[];
    users: User[];
    me: User;
    usersTyping?: User[];
  }>(),
  {
    usersTyping: () => [],
  }
);
</script>
<template>
</template>
