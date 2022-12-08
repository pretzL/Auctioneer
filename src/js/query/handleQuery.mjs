/**
 * Function which initiates what to do when submitting the form
 * @param {element} form form to get value from
 * @example
 * ```js
 * handleQuery(searchBarForm)
 * // Expect the function to redirect the user to the listings page and passing along what the user searched for.
 * ```
 */
export function handleQuery(form) {
  form.preventDefault();
  const [input] = form.target.elements;
  location.href = `./listings.html?query=${input.value}`;
}
