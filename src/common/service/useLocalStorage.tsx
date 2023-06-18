export const localStorageService = () => {
  function getItem<T>(name: string) {
    const data = localStorage.getItem(name);
    return data ? (JSON.parse(data) as T) : null;
  }

  function setItem(name: string, setedData: any) {
    const serialized = JSON.stringify(setedData);
    localStorage.setItem(name, serialized);
  }

  return {
    localStorageGet: getItem,
    localStorageSet: setItem,
  };
};
