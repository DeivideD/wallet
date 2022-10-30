import { VO, isVo, VoValues } from "./vo";


export function toString(value: VoValues): string {
  if (value === null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  throw new Error(`"${String(value)}" not a string`);
}

export function toVO(value: VoValues): VO {
  return value as VO;
}

export function toDecimal(value: VoValues): number {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "undefined") {
    return 0;
  }


  if (typeof value === "string") {
    return parseFloat(value.trim());
  }
  throw new Error(`"${String(value)}" not a decimal`);
}

export function toBoolean(value: VoValues): boolean {
  if (value === null) {
    return false;
  }
  if (typeof value === "boolean") {
    return value;
  }
  throw new Error(`"${String(value)}" not a boolean`);
}

export function toDate(value: VoValues): string {
  if (value === null) {
    return "";
  }
  if (typeof value === "string") {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(value));
  }
  throw new Error(`"${String(value)}" not a valid date`);
}




export function ToInteger(value: VoValues): number {
  if (typeof value === "string") {
    return parseInt(value.trim());
  }
  if (typeof value === "number") {
    return value;
  }
  throw new Error(`"${String(value)}" not a number`);
}

export function fromStringIn<T extends string>(value: VoValues, values: readonly T[]): T {
  if (typeof value === "string" && values.includes(value as T)) {
    return value as T;
  }
  throw new Error(`"${String(value)}" not in [${values.join(", ")}]`);
}

export function fromMaybeVo<I extends VoValues, T>(value: I, converter: (value: VO) => T): T | null;
export function fromMaybeVo<I, T>(value: I | null, converter: (value: I) => T): T | null;
export function fromMaybeVo<I, T>(value: I | null, converter: (value: I) => T): T | null {
  if (value === null) {
    return null;
  }
  if (isVo(value)) {
    return converter(value);
  }

  throw new Error(`"${String(value)}" not a vo | null`);
}

export function array<T>(value: VoValues, converter: (value: VoValues) => T): T[] {
  if (value === null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value.map(converter);
  }
  throw new Error(`"${String(value)}" not an array`);
}
