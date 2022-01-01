/*
 *    slug-rightsidebar è la funzione slug con l'eccezione che vengono consentiti caratteri di certi alfabeti europei come
 *    à, è, ù... mentre vengono rimossi i caratteri [], /, ()
 *    la funzione è usata esclusivamente all'interno del componente TOC
 */
export default function slugify(string) {
  return string
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s/g, "-") // Replace each space with
    .replace(/["'/()?!$&^,.#]/g, ""); // Replace every instance of () [] / with '' ;
}
