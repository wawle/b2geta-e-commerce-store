import { Billboard, Category, Color, Currency, Size } from "@/types";

// Dummy data
const billboard1: Billboard = {
  id: "1",
  label: "Summer Sale",
  imageUrl: "https://example.com/summer-sale.jpg",
};

const billboard2: Billboard = {
  id: "2",
  label: "Winter Clearance",
  imageUrl: "https://example.com/winter-clearance.jpg",
};

const billboard3: Billboard = {
  id: "3",
  label: "Back to School",
  imageUrl: "https://example.com/back-to-school.jpg",
};

const category1: Category = {
  id: "1",
  name: "Clothing",
  billboard: billboard1,
};

const category2: Category = {
  id: "2",
  name: "Electronics",
  billboard: billboard2,
};

const category3: Category = {
  id: "3",
  name: "Stationery",
  billboard: billboard3,
};

const size1: Size = {
  id: "1",
  name: "Medium",
  value: "M",
};

const size2: Size = {
  id: "2",
  name: "Large",
  value: "L",
};

const size3: Size = {
  id: "3",
  name: "Small",
  value: "S",
};

const color1: Color = {
  id: "1",
  name: "Red",
  value: "#FF0000",
};

const color2: Color = {
  id: "2",
  name: "Blue",
  value: "#0000FF",
};

const color3: Color = {
  id: "3",
  name: "Green",
  value: "#00FF00",
};

const currencyList: Currency[] = [
  { sign: "₺", code: "TRY", name: "Turkish Lira" },
  { sign: "$", code: "USD", name: "US Dollar" },
  { sign: "€", code: "EUR", name: "Euro" },
  { sign: "лв", code: "BGN", name: "Bulgarian Lev" },
];

// Example usage
const billboardList = [billboard1, billboard2, billboard3];
const categoryList = [category1, category2, category3];
const sizeList = [size1, size2, size3];
const colorList = [color1, color2, color3];

export { billboardList, categoryList, sizeList, colorList, currencyList };
