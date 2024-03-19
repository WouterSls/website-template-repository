import React from "react";

interface ShoppingListProps {
  test: string;
}

const ShoppingList: React.FC<ShoppingListProps> = ({ test }) => {
  return <div>{test}</div>;
};

export default ShoppingList;
