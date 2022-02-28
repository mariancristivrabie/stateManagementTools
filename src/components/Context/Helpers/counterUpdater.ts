export default function getNewCounterValue(
  oldState: any,
  toBeSetKey: string,
  action: "INCREASE" | "DECREASE"
) {
  return {
    ...oldState,
    [toBeSetKey]:
      action === "INCREASE"
        ? oldState[toBeSetKey] + 1
        : oldState[toBeSetKey] - 1,
  };
}
