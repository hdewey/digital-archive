

export const byteaToBase64 = (data: any) => {
  const byteaArray = new Uint8Array(data);
  const blob = new Blob([byteaArray], { type: "image/jpeg" });
  const imageUrl = URL.createObjectURL(blob);

  return imageUrl;
}