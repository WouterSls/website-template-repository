import React from "react";
import ShoppingList from "@/components/shoppinglist-page/ShoppingList";
import RecipeLayout from "@/components/shoppinglist-page/RecipeLayout1";

const recipe_list: string[] = ["hello", "Test"];

const ShoppingListPage = () => {
  return (
    <section>
      <p className="sticky text-center mx-20 rounded-xl p-2 border-gray-200 border mt-8">
        search ...
      </p>
      <h1 className="mt-10 mb-5 text-center text-2xl text-5xl font-bold">
        Shopping List
      </h1>
      <p className="text-center text-xs"> amount selected: 0</p>
      <div>
        {recipe_list.map((recipe, index) => (
          <RecipeLayout key={index} recipe={recipe}></RecipeLayout>
        ))}
      </div>
    </section>
  );
};

export default ShoppingListPage;
