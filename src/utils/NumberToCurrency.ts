export const formatter = (
   price: number,
   locale: string = "ru-RU",
   currency: string = "RUB",
) => {
   return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
   }).format(price);
};
