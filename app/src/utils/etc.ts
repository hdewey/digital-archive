import { Project } from "./types";

export const byteaToBase64 = (data: any) => {
  const byteaArray = new Uint8Array(data);
  const blob = new Blob([byteaArray], { type: "image/jpeg" });
  const imageUrl = URL.createObjectURL(blob);

  return imageUrl;
};

export const shuffle = (array: any[] | undefined) => {

  if (array === undefined) return [];  
  
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}