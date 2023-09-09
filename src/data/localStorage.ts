import Phone from '../models/interface';

export const addPhoneToLocalStorage = (phone: Phone) => {
  let phonesArrayInLocalStorage = readLocalStorage();
  if (phonesArrayInLocalStorage) {
    phonesArrayInLocalStorage.data.push(phone);
    localStorage.setItem(
      'shopPhone',
      JSON.stringify(phonesArrayInLocalStorage),
    );
  }
};

export const readLocalStorage = () => {
  let phonesArrayInLocalStorage = localStorage.getItem('shopPhone');
  if (phonesArrayInLocalStorage != null) {
    let phonesArrayToObject = JSON.parse(phonesArrayInLocalStorage);
    return phonesArrayToObject;
  }
  return { data: [] };
};
