export const formattedPrice = (price: number | undefined): string => {
  if (price == null) return "";

  return new Intl.NumberFormat("tr-TR").format(price) + " TL";
};
