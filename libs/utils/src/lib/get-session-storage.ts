export const getSessionStorage = (key: string) => {
  const sessionStorageValue = JSON.parse(
    window.sessionStorage.getItem(key) || '{}'
  );
  return sessionStorageValue;
}

export default getSessionStorage;
