export function handleQuery(form) {
  form.preventDefault();
  const [input] = form.target.elements;
  location.href = `./listings.html?query=${input.value}`;
}
