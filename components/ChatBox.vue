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

defineEmits<{
  (e: "newMessage", payload: Message): void;
}>();

// focus input whenever chatbox is opened
const open = ref(false);
const input = ref();
watch(open, () => {
  if (!open.value) return;
  nextTick(() => {
    (input.value as HTMLInputElement).focus();
  });
});
</script>
<template>
</template>
