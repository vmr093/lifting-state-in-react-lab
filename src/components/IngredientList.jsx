// src/components/IngredientList.jsx
const IngredientList = (props) => {
    const { availableIngredients, addToBurger } = props
    
      return (
        <>
          <ul>
            {availableIngredients.map((ingredient, index) => (
              <li key={index} style={{backgroundColor:ingredient.color}}>
                <p>{ingredient.name}</p>
                <button onClick={()=>addToBurger(ingredient)}>+</button>
              </li>
            ))}
          </ul>
          
        </>
      );
    };
    
    export default IngredientList;