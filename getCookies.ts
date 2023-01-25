export default async function getCookies(cookies: string, keyword: string) {
  new Promise((resolve, rejects) => {
    const seperated_cookies = cookies.split("; ");
    seperated_cookies.forEach((element) => {
      const key_pair = element.split("=");
      if (key_pair[0] === keyword) {
        resolve(key_pair[1]);
      } else {
        rejects(null);
      }
    });
  });
}
2