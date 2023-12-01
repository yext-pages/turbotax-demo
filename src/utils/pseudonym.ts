export function cleanPseudonym(pseudonym: string) {
  // pseudonyms are hexadecimal. We append an environment prefix with a dash, so we need to remove it
  return pseudonym.replace(/^[^-]+-/, "");
}
