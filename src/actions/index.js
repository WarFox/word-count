
export const refreshCount = (text, changeType) => {
  return {
    type: "REFRESH_COUNT",
    text,
    changeType
  };
};
