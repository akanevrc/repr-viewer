use bytemuck::NoUninit;
use half::{bf16, f16};
use std::str::FromStr;
use wasm_bindgen::prelude::*;

#[cfg(target_endian = "big")]
fn to_bytes<T: NoUninit + FromStr>(number: &str) -> Box<[u8]> {
    match number.parse::<T>() {
        Ok(value) => Vec::from(bytemuck::bytes_of(&value)).into_boxed_slice(),
        Err(_) => Box::new([]),
    }
}

#[cfg(target_endian = "little")]
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

macro_rules! def_fn {
    ($fn_name:ident, $target_ty:ty) => {
        #[wasm_bindgen]
        pub fn $fn_name(number: &str) -> Box<[u8]> {
            to_bytes::<$target_ty>(number)
        }
    };
}

def_fn!(to_u8, u8);
def_fn!(to_u16, u16);
def_fn!(to_u32, u32);
def_fn!(to_u64, u64);
def_fn!(to_i8, i8);
def_fn!(to_i16, i16);
def_fn!(to_i32, i32);
def_fn!(to_i64, i64);
def_fn!(to_f16, f16);
def_fn!(to_bf16, bf16);
def_fn!(to_f32, f32);
def_fn!(to_f64, f64);
