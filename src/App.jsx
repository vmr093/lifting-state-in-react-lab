import "./App.css";
import IngredientList from "src/components/IngredientList.jsx";
import BurgerStack from "src/components/BurgerStack.jsx";
import { useState } from "react";

// src/App.jsx

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient)=>{
    setStack((prevStack)=>[...prevStack,ingredient])
  }
  const removeFromBurger = (ingredient) =>{
    setStack((prevStack) =>
      prevStack.filter((item) => item.name !== ingredient.name)
    );
  };
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          availableIngredients={availableIngredients}
          addToBurger={addToBurger}
        />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;