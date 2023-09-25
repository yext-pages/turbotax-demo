/**
 * Convert from 'web safe' base64 to true base64.
 *
 * @param  {string} safeEncodedString The code you want to translate
 *                                    from a web safe form.
 * @return {string}
 */
function removeWebSafe(safeEncodedString: string): string {
  return safeEncodedString.replace(/-/g, "+").replace(/_/g, "/");
}

/**
 * Convert from true base64 to 'web safe' base64
 *
 * @param  {string} encodedString The code you want to translate to a
 *                                web safe form.
 * @return {string}
 */
function webMakeWebSafe(encodedString: ArrayBuffer): string {
  const stringified = btoa(String.fromCharCode(...new Uint8Array(encodedString)));
  return stringified.replace(/\+/g, "-").replace(/\//g, "_");
}

/**
 * Takes a base64 code and decodes it.
 *
 * @param  {string} code The encoded data.
 * @return {string}
 */
function webDecodeBase64Hash(code: string): Uint8Array {
  return Uint8Array.from(atob(code), (c) => c.charCodeAt(0));
}

/**
 * Takes a key and signs the data with it.
 *
 * @param  {string} key  Your unique secret key.
 * @param  {string} data The url to sign.
 * @return {string}
 */
async function webEncodeBase64Hash(key: Uint8Array, data: string): Promise<ArrayBuffer> {
  const importedKey = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );
  return crypto.subtle.sign(
    { name: "HMAC", hash: "SHA-1" },
    importedKey,
    Uint8Array.from(data, (c) => c.charCodeAt(0))
  );
}

/**
 * Sign a URL using a secret key.
 *
 * @param  {string} path   The url you want to sign.
 * @param  {string} secret Your unique secret key.
 * @return {string}
 */
export async function webSign(path: string, secret: string): Promise<string> {
  const uri = new URL(path);
  const safeSecret = webDecodeBase64Hash(removeWebSafe(secret));
  const hashedSignature = webMakeWebSafe(
    await webEncodeBase64Hash(safeSecret, uri.pathname + uri.search)
  );
  return uri.toString() + "&signature=" + hashedSignature;
}
