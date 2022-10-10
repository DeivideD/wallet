import { Big } from "big.js";
import { VO, isVo, VoValues } from "./vo";

interface FieldModelState {
  valid: boolean;
  touched: boolean;
  editing: boolean;
  focus: boolean;
  applicable: boolean;
  readonly: boolean;
  calculated: boolean;
  errorMessage: string;
}

export interface FieldModel extends FieldModelState {
  value: string;
}

export interface FieldModelVO<T extends VO | null> extends FieldModelState {
  value: T | null;
}

export function isFieldModel(value: any): value is FieldModel {
  return !!value && value.value !== undefined && typeof value.value === "string";
}

export function isFieldModelVO<T extends VO | null>(value: any): value is FieldModelVO<T> {
  return !!value && value.value !== undefined && (value.value === null || isVo(value.value));
}

function toFieldModel(value: string): FieldModel;
function toFieldModel<T extends VO | null>(value: T | null): FieldModelVO<T>;
function toFieldModel(value: string | VO | null) {
  return {
    errorMessage: "",
    valid: true,
    touched: false,
    editing: false,
    focus: false,
    applicable: true,
    readonly: false,
    calculated: false,
    value,
  };
}

  export function toString(value: VoValues): FieldModel {
    if (value === null) {
      return toFieldModel("");
    }
    if (typeof value === "string") {
      return toFieldModel(value);
    }
    throw new Error(`"${String(value)}" not a string`);
  }

  export function toDecimal(value: VoValues): FieldModel {
    if (value === null) {
      return toFieldModel("");
    }
    if (typeof value === "string") {
      return toFieldModel(Big(value.trim()).toString());
    }
    throw new Error(`"${String(value)}" not a decimal`);
  }

  export function boolean(value: VoValues): FieldModel {
    if (value === null) {
      return toFieldModel("");
    }
    if (typeof value === "boolean") {
      return toFieldModel(value.toString());
    }
    throw new Error(`"${String(value)}" not a boolean`);
  }

  export function ToInteger(value: VoValues): FieldModel {
    if (value === null) {
      return toFieldModel("");
    }
    if (typeof value === "number") {
      return toFieldModel(value.toString());
    }
    throw new Error(`"${String(value)}" not a number`);
  }

  export function identityVo<T extends VO>(value: T | null): FieldModelVO<T> {
    return toFieldModel<T>(value);
  }

  export function vo<T extends VO>(): FieldModelVO<T>;
  export function vo<T extends VO>(value: VoValues, converter: (value: VO) => T): FieldModelVO<T>;
  export function vo<T extends VO>(value?: VoValues, converter?: (value: VO) => T): FieldModelVO<T | null> {
    if (value === null || arguments.length === 0) {
      return toFieldModel(null);
    }
    if (isVo(value)) {
      return toFieldModel(converter!(value));
    }
    throw new Error(`"${String(value)}" not a vo`);
  }


  export function fromString(value: FieldModel): string | null;
  export function fromString(value: VoValues): string;
  export function fromString(value: FieldModel | VoValues) {
    if (value === null) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    if (isFieldModel(value)) {
      return value.applicable && value.value ? value.value : null;
    }
    throw new Error(`"${String(value)}" not a string`);
  }

  export function fromMaybeString(value: VoValues): string | null {
    if (value === null) {
      return null;
    }
    if (typeof value === "string") {
      return value;
    }
    throw new Error(`"${String(value)}" not a string | null`);
  }

  export function fromStringIn<T extends string>(value: VoValues, values: readonly T[]): T {
    if (typeof value === "string" && values.includes(value as T)) {
      return value as T;
    }
    throw new Error(`"${String(value)}" not in [${values.join(", ")}]`);
  }

  export function fromMaybeStringIn<T extends string>(value: VoValues, values: readonly T[]): T | null {
    if (value === null) {
      return null;
    }
    return fromStringIn(value, values);
  }

  export function fromId<T extends { id: number }>(value: FieldModelVO<T> | VoValues): number | null {
    if (isFieldModelVO(value)) {
      if (!value.applicable) {
        return null;
      }
      return value.value ? value.value.id : null;
    }
    if (typeof value === "number") {
      return value;
    }
    if (value === null) {
      return null;
    }
    throw new Error(`"${String(value)}" not an id`);
  }

  export function fromInteger(value: FieldModel): number | null;
  export function fromInteger(value: VoValues): number;
  export function fromInteger(value: FieldModel | VoValues) {
    if (typeof value === "number") {
      return value;
    }
    if (isFieldModel(value)) {
      return value.applicable ? parseInt(value.value, 10) : null;
    }
    throw new Error(`"${String(value)}" not a number`);
  }

  export function fromMaybeInteger(value: VoValues): number | null {
    if (value === null) {
      return null;
    }
    if (typeof value === "number") {
      return value;
    }
    throw new Error(`"${String(value)}" not a number | null`);
  }

  export function fromBoolean(value: FieldModel): boolean | null;
  export function fromBoolean(value: VoValues): boolean;
  export function fromBoolean(value: FieldModel | VoValues): boolean | null {
    if (typeof value === "boolean") {
      return value;
    }
    if (isFieldModel(value)) {
      if (!value.applicable) {
        return null;
      }
      switch (value.value) {
        case "":
          return null;
        case "true":
          return true;
        case "false":
          return false;
      }
      throw new Error(`field.value "${value.value}" not a boolean`);
    }
    throw new Error(`"${String(value)}" not a boolean`);
  }

  export function fromMaybeBoolean(value: VoValues): boolean | null {
    if (value === null) {
      return null;
    }
    if (typeof value === "boolean") {
      return value;
    }
    throw new Error(`"${String(value)}" not a boolean | null`);
  }

  export function fromVo<T extends VO>(value: FieldModelVO<T>): T | null;
  export function fromVo<I extends VO, T>(value: I | null, converter: (value: I) => T): T;
  export function fromVo<I extends VoValues, T>(value: I, converter: (value: VO) => T): T;
  export function fromVo<I, T>(value: I | null, converter?: (value: I | VO) => T) {
    if (isFieldModelVO(value)) {
      return value.applicable ? value.value : null;
    }

    if (isVo(value)) {
      return converter!(value);
    }

    throw new Error(`"${String(value)}" not a vo`);
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

  export function arrayString(value: VoValues): string[] {
    return array(value, fromString);
  }
