const categories = {
   keyboards: "Клавиатуры",
   monitors: "Мониторы",
   processors: "Процессоры",
   "video-cards": "Видеокарты",
};

export type CategoriesType = keyof typeof categories;

export const translateCategory = (category: CategoriesType) => {
   return categories[category];
};
