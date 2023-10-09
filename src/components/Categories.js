import React, { useState } from "react";

export default function Categories({ chooseCategory }) {
  const [categories] = useState([
    {
      key: "all",
      name: "Всі",
    },
    {
      key: "table",
      name: "Столи",
    },
    {
      key: "chair",
      name: "Крісла",
    },
    {
      key: "sofa",
      name: "Дивани",
    },
    {
      key: "wardrobe",
      name: "Шафи",
    },
  ]);
  return (
    <div className="categories">
      {categories.map((el) => (
        <div onClick={() => chooseCategory(el.key)} key={el.key}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
