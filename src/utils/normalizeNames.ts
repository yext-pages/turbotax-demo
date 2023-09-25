export function normalizeName(name: string) {
  return encodeURIComponent(name.toLocaleLowerCase().replaceAll(" ", "-").normalize());
}
