export const getBillboard = async (): Promise<Blob> => {
  const res = await fetch("https://image.dummyjson.com/400x200/282828");

  return res.blob();
};
