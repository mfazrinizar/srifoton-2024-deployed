// lib/cryptoUtils.ts

import { encode as base64Encode, decode as base64Decode } from "base64-arraybuffer";

function base64ToArrayBuffer(base64: string): ArrayBuffer {
    const base64String = base64.replace(/-/g, '+').replace(/_/g, '/');
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

export async function signCookie(value: string, secret: string): Promise<string> {
    const key = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );

    const signature = await crypto.subtle.sign(
        "HMAC",
        key,
        new TextEncoder().encode(value)
    );

    const signedValue = `${value}.${base64Encode(signature)}`;
    // console.log("Signed value:", signedValue);
    return signedValue;
}

export async function unsignCookie(value: string, secret: string): Promise<string | null> {
    const lastDotIndex = value.lastIndexOf(".");
    const rawValue = value.substring(0, lastDotIndex);
    const signature = value.substring(lastDotIndex + 1);

    if (!rawValue || !signature) {
        // console.error("Invalid cookie value:", value);
        return null;
    }

    const key = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["verify"]
    );

    const signatureArrayBuffer = base64ToArrayBuffer(signature);

    if (!(signatureArrayBuffer instanceof ArrayBuffer)) {
        // console.error("Failed to convert base64 to ArrayBuffer");
        return null;
    }

    const isValid = await crypto.subtle.verify(
        "HMAC",
        key,
        new Uint8Array(signatureArrayBuffer),
        new TextEncoder().encode(rawValue)
    );

    // console.log("Raw value from cookie:", rawValue);
    // console.log("Signature from cookie:", signature);
    // console.log("Signature verification result:", isValid);

    return isValid ? rawValue : null;
}
