
export const refrestCount = (text, changeType) => {
  return {
    type: "REFRESH_COUNT",
    text,
    changeType
  };
};
