import { ownKeys } from "./obj";

type VoPrimitives = string | boolean | number | undefined | null | VO;
export type VoValues = VoPrimitives | VoPrimitives[] ;

export interface VO {
  [p: string]: VoValues;
}

export function isVo(value: unknown): value is VO {
  if (Array.isArray(value) || typeof value !== "object" || value === null) {
    return false;
  }
  const keys = ownKeys(value);
  return keys.every(key => {
    const attributeValue: unknown = value[key];
    if (attributeValue === null) {
      return true;
    }
    if (Array.isArray(attributeValue)) {
      return attributeValue.every(v => isVoPrimitive(v) || isVo(v));
    }
    if (typeof attributeValue === "object") {
      return isVo(attributeValue);
    }
    if (isVoPrimitive(attributeValue)) {
      return true;
    }
    return false;
  });
}

function isVoPrimitive(attributeValue: unknown) {
  return ["string", "number", "boolean"].indexOf(typeof attributeValue) >= 0;
}
