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

function getUser(id: string) {
  return props.users.find((user) => user.id === id);
}
</script>
<template>
  <div class="fixed bottom-[10px] right-[10px]">
    <button v-show="!open" @click="open = true" class="bg-blue-500 p-3 rounded">
      <IconChat class="h-8 w-8 text-white" />
    </button>
    <div
      v-if="open"
      class="box bg-gray-300 dark:bg-gray-800 rounded w-[450px] overflow-hidden"
    >
      <!-- Messages -->
      <div class="messages p-4 overflow-y-scroll max-h-[80vh]">
        <ChatBubble
          v-for="message in messages"
          :key="message.id"
          :message="message"
          :user="getUser(message.userId)"
          :my-message="message.userId === me.id"
        />
      </div>
    </div>
  </div>
</template>
