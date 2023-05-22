<script setup lang="ts">
const props = defineProps<{
  url: string;
  temperature: number;
}>();

const { chat, state, firstMessage } = useChatAi({ agent: "twitter" });
const generate = () => nextTick(() => chat(props));
defineExpose({ generate });

</script>
<template>
  <CardGeneric
    title="Crossword"
    :state="state"
    :body="firstMessage?.content.trim()"
    @update:body="firstMessage ? (firstMessage.content = $event) : null"
    class="mb-10"
  >
    <div
      v-if="firstMessage?.content.trim()"
      class="flex w-full justify-between items-center"
    >
      <div>
        <button class="btn btn-neutral" @click="generate()">Regenerate</button>
      </div>
    </div>
  </CardGeneric>
</template>
