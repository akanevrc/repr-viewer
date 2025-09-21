import * as wasm from "repr-viewer-wasm";
import type { Ty } from "./ty"

export const toBytes = (number: string, ty: Ty): Uint8Array => {
  switch (ty) {
    case "u8":
      return wasm.to_u8_bytes(number);
    case "u16":
      return wasm.to_u16_bytes(number);
    case "u32":
      return wasm.to_u32_bytes(number);
    case "u64":
      return wasm.to_u64_bytes(number);
    case "i8":
      return wasm.to_i8_bytes(number);
    case "i16":
      return wasm.to_i16_bytes(number);
    case "i32":
      return wasm.to_i32_bytes(number);
    case "i64":
      return wasm.to_i64_bytes(number);
    case "f16":
      return wasm.to_f16_bytes(number);
    case "bf16":
      return wasm.to_bf16_bytes(number);
    case "f32":
      return wasm.to_f32_bytes(number);
    case "f64":
      return wasm.to_f64_bytes(number);
  }
};

export const toValue = (number: string, ty: Ty): string | null => {
  switch (ty) {
    case "u8":
      return wasm.to_u8_value(number).toString();
    case "u16":
      return wasm.to_u16_value(number).toString();
    case "u32":
      return wasm.to_u32_value(number).toString();
    case "u64":
      return wasm.to_u64_value(number).toString();
    case "i8":
      return wasm.to_i8_value(number).toString();
    case "i16":
      return wasm.to_i16_value(number).toString();
    case "i32":
      return wasm.to_i32_value(number).toString();
    case "i64":
      return wasm.to_i64_value(number).toString();
    case "f16":
      return "未対応";
    case "bf16":
      return "未対応";
    case "f32":
      return wasm.to_f32_value(number).toString();
    case "f64":
      return wasm.to_f64_value(number).toString();
  }
};
