export function normalizeName(name: string) {
  return name.toLocaleLowerCase().replaceAll(" ", "-").replaceAll(",", "").normalize();
}
