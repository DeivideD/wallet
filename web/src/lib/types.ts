import { Big } from "big.js";
import { VO, isVo, VoValues } from "./vo";

// interface FieldModelState {
//   valid: boolean;
//   touched: boolean;
//   editing: boolean;
//   focus: boolean;
//   applicable: boolean;
//   readonly: boolean;
//   calculated: boolean;
//   errorMessage: string;
// }

// export interface FieldModel extends FieldModelState {
//   value: string;
// }

// export interface FieldModelVO<T extends VO | null> extends FieldModelState {
//   value: T | null;
// }

// export function isFieldModel(value: any): value is FieldModel {
//   return !!value && value.value !== undefined && typeof value.value === "string";
// }

// export function isFieldModelVO<T extends VO | null>(value: any): value is FieldModelVO<T> {
//   return !!value && value.value !== undefined && (value.value === null || isVo(value.value));
// }

// function toFieldModel(value: string): FieldModel;
// function toFieldModel<T extends VO | null>(value: T | null): FieldModelVO<T>;
// function toFieldModel(value: string | VO | null) {
//   return {
//     errorMessage: "",
//     valid: true,
//     touched: false,
//     editing: false,
//     focus: false,
//     applicable: true,
//     readonly: false,
//     calculated: false,
//     value,
//   };
// }

  export function toString(value: VoValues): string {
    if (value === null) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    throw new Error(`"${String(value)}" not a string`);
  }

  export function toDecimal(value: VoValues): number {
    if (typeof value === "number") {
      return value;
    }

    if (typeof value === "string") {
      return parseFloat(value.trim());
    }
    throw new Error(`"${String(value)}" not a decimal`);
  }

  export function boolean(value: VoValues): boolean {
    if (value === null) {
      return false;
    }
    if (typeof value === "boolean") {
      return value;
    }
    throw new Error(`"${String(value)}" not a boolean`);
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
