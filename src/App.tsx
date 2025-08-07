import { useEffect, useState } from "react";
import apiClient from "./lib/apiClient";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await apiClient.get("recipes/random", {
          params: {
            number: 10,
          },
        });
        setRecipes(response.data.recipes);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch recipes");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="text-xl font-bold mb-4">Recipes</div>
      {loading && <div className="text-gray-500">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
