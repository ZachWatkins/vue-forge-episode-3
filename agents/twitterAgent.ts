import createAgent from ".";

export const twitterAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content: "You are a teacher writing a new crossword puzzle for your students to teach them key terms and concepts mentioned in an article",
      },
      {
        role: "user",
        content: `Create a list of crossword puzzle answers using key terms mentioned in the following article: ${context.url}. Then create a list of hints for those answers.`,
      },
    ],
    max_tokens: 350,
  };
});
