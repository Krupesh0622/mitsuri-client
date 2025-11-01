// import { twMerge } from "tailwind-merge";
// import clsx from "clsx";
import CryptoJS from "crypto-js";
import { Color, Solver } from "./color";

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// Encryption Functions
const generateEncryptionKey = () => {
  const appName = import.meta.env.VITE_APP_NAME || "TheMonkLab";
  const appVersion = import.meta.env.VITE_APP_VERSION || "1.0.0";
  const userAgent =
    typeof window !== "undefined" ? window.navigator.userAgent : "server";

  const keyMaterial = `${appName}-${appVersion}-${userAgent.slice(0, 20)}`;
  return CryptoJS.SHA256(keyMaterial).toString();
};

const encryptionKey = generateEncryptionKey();

export const encrypt = (data) => {
  try {
    const jsonString = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonString, encryptionKey).toString();
  } catch (error) {
    console.error("Encryption error:", error);
    return null;
  }
};

export const decrypt = (encryptedData) => {
  try {
    if (!encryptedData || typeof encryptedData !== "string") {
      return null;
    }

    const decrypted = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);

    if (!jsonString) {
      return null;
    }

    return jsonString;
  } catch (error) {
    console.warn("Decryption error:", error);
    return null;
  }
};

export const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

export const creteImgFilter = (hex) => {
  const rgb = hexToRgb(hex);
  const color = new Color(rgb[0], rgb[1], rgb[2]);
  const solver = new Solver(color);
  const result = solver.solve();
  return result?.filter;
};
