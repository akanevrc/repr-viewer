export const toRepr = (bytes: Uint8Array): string | null => {
  if (bytes.length === 0) return null;

  const repr = [];
  for (let byte of bytes) {
    for (let i = 0; i < 8; i++) {
      const digit = (byte & 0x1) == 0 ? "0" : "1";
      repr.push(digit);
      byte >>>= 1;
    }
  }

  return repr.reverse().join("");
};

export const toReprSep = (bytes: Uint8Array, sizes: [number, number, number] | null): [string, string, string] | null => {
  if (bytes.length === 0 || sizes === null) return null;

  const sign = [];
  const exp = [];
  const frac = [];
  const fracEnd = sizes[2];
  const expEnd = fracEnd + sizes[1];
  const signEnd = expEnd + sizes[0];
  let count = 0;
  for (let byte of bytes) {
    for (let i = 0; i < 8; i++) {
      const digit = (byte & 0x1) == 0 ? "0" : "1";
      if (count < fracEnd) {
        frac.push(digit);
      }
      else if (count < expEnd) {
        exp.push(digit);
      }
      else if (count < signEnd) {
        sign.push(digit);
      }
      else {
        return null;
      }
      byte >>>= 1;
      count++;
    }
  }

  return [
    sign.reverse().join(""),
    exp.reverse().join(""),
    frac.reverse().join(""),
  ];
}
