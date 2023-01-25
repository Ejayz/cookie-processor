async function createCookies(
  name: string,
  data: string,
  expires?: Date | number,
  path?: string
) {
  return `${name}=${data};expires=${expires};path=${path}`;
}
export default {
  createCookies,
};
