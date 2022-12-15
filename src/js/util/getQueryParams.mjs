export function getQueryParams(value) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const param = params.get(value);
  return param;
}
