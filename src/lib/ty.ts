export type Ty =
  | "u8"
  | "u16"
  | "u32"
  | "u64"
  | "i8"
  | "i16"
  | "i32"
  | "i64"
  | "f16"
  | "bf16"
  | "f32"
  | "f64";

export const tys = [
  "u8",
  "u16",
  "u32",
  "u64",
  "i8",
  "i16",
  "i32",
  "i64",
  "f16",
  "bf16",
  "f32",
  "f64",
];

export const isFloat = (ty: Ty): boolean => {
  switch (ty) {
    case "u8":
    case "u16":
    case "u32":
    case "u64":
    case "i8":
    case "i16":
    case "i32":
    case "i64":
      return false;
    case "f16":
    case "bf16":
    case "f32":
    case "f64":
      return true;
  }
};

export const toSizes = (ty: Ty): [number, number, number] | null => {
  switch (ty) {
    case "u8":
    case "u16":
    case "u32":
    case "u64":
    case "i8":
    case "i16":
    case "i32":
    case "i64":
      return null;
    case "f16":
      return [1, 5, 10];
    case "bf16":
      return [1, 8, 7];
    case "f32":
      return [1, 8, 23];
    case "f64":
      return [1, 11, 52];
  }
}
