import { nanoid } from "nanoid";
export default defineEventHandler((event) => {
  return {
    id: nanoid(),
    createdAt: new Date(),
    text: "Hello API!",
    userId: "assistant",
  }
})
