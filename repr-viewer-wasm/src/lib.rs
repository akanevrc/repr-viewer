use bytemuck::NoUninit;
#[cfg(target_endian = "little")]
use bytemuck::Zeroable;
use half::{bf16, f16};
use std::str::FromStr;
use wasm_bindgen::prelude::*;

#[cfg(target_endian = "little")]
fn to_bytes<T: NoUninit + FromStr>(number: &str) -> Box<[u8]> {
    match number.parse::<T>() {
        Ok(value) => Vec::from(bytemuck::bytes_of(&value)).into_boxed_slice(),
        Err(_) => Box::new([]),
    }
}

#[cfg(target_endian = "big")]
fn to_bytes<T: NoUninit + FromStr>(number: &str) -> Box<[u8]> {
    match number.parse::<T>() {
        Ok(value) => bytemuck::bytes_of(&value)
            .iter()
            .rev()
            .copied()
            .collect::<Vec<_>>()
            .into_boxed_slice(),
        Err(_) => Box::new([]),
    }
}

fn to_value<T: NoUninit + Zeroable + FromStr>(number: &str) -> T {
    match number.parse::<T>() {
        Ok(value) => value,
        Err(_) => T::zeroed(),
    }
}

macro_rules! def_to_bytes {
    ($fn_name:ident, $target_ty:ty) => {
        #[wasm_bindgen]
        pub fn $fn_name(number: &str) -> Box<[u8]> {
            to_bytes::<$target_ty>(number)
        }
    };
}

macro_rules! def_to_value {
    ($fn_name:ident, $target_ty:ty) => {
        #[wasm_bindgen]
        pub fn $fn_name(number: &str) -> $target_ty {
            to_value::<$target_ty>(number)
        }
    };
}

def_to_bytes!(to_u8_bytes, u8);
def_to_bytes!(to_u16_bytes, u16);
def_to_bytes!(to_u32_bytes, u32);
def_to_bytes!(to_u64_bytes, u64);
def_to_bytes!(to_i8_bytes, i8);
def_to_bytes!(to_i16_bytes, i16);
def_to_bytes!(to_i32_bytes, i32);
def_to_bytes!(to_i64_bytes, i64);
def_to_bytes!(to_f16_bytes, f16);
def_to_bytes!(to_bf16_bytes, bf16);
def_to_bytes!(to_f32_bytes, f32);
def_to_bytes!(to_f64_bytes, f64);

def_to_value!(to_u8_value, u8);
def_to_value!(to_u16_value, u16);
def_to_value!(to_u32_value, u32);
def_to_value!(to_u64_value, u64);
def_to_value!(to_i8_value, i8);
def_to_value!(to_i16_value, i16);
def_to_value!(to_i32_value, i32);
def_to_value!(to_i64_value, i64);
def_to_value!(to_f32_value, f32);
def_to_value!(to_f64_value, f64);
