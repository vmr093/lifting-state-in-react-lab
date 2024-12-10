// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    const {stack, removeFromBurger} = props;
    
    
    
    
      return (
        <>
          <ul>
            {stack.map((ingredient, index) => (
              <li key={index} style={{ backgroundColor: ingredient.color }}>
                <p> {ingredient.name}</p>
                <button onClick={() => removeFromBurger(ingredient)}>X </button>
              </li>
            ))}
          </ul>
        </>
      );
    
    };
    
    export default BurgerStack;