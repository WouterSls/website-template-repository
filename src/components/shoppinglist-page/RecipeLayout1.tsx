import React from "react";

interface RecipeProps {
  recipe: string;
}

const RecipeLayout: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div>
      <h2 className="text-center my-8 min-h-[40svh] bg-gray-200 border border-b max-w-xs mx-auto rounded-xl">
        {recipe}
      </h2>
    </div>
  );
};

export default RecipeLayout;
