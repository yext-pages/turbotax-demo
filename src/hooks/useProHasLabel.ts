import useIndependentPro from "./useIndependentPro";

export enum Label {
  Test = "test",
  OffboardInProgress = "offboardInProgress",
}

export function useProHasLabel(label: Label) {
  const { labels } = useIndependentPro();
  if (!labels) return false;
  const labelNum = JSON.parse(YEXT_PUBLIC_LABEL_LOOKUP_MAP)[label];
  return !!(labelNum && labels.includes(String(labelNum)));
}
