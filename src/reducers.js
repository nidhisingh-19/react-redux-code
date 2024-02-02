// reducer.js
import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from './actions';

const initialState = {
  selectedMaterial: null,
  selectedRobots: [], // Ensure this is initialized as an array
};

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {

    case ADD_TO_CART:
      const robot = action.payload;
      console.log(`value of robots is ${robot}`);
      const existingRobot = state.selectedRobots.find((r) => r.name === robot.name);

      if (existingRobot) {
        const updatedRobots = state.selectedRobots.map((r) =>
          r.name === robot.name
            ? {
              ...r,
              quantity: r.quantity + 1,
              totalPrice: (r.quantity + 1) * robot.price,
              stock: r.stock - 1,
            }
            : r
        );

        return {
          ...state,
          selectedRobots: updatedRobots,
        };
      } else {
        return {
          ...state,
          selectedRobots: [
            ...state.selectedRobots,
            {
              ...robot,
              quantity: 1,
              totalPrice: robot.price,
              stock: robot.stock - 1,
            },
          ],
        };
      }

    case INCREMENT_QUANTITY:
      const robotIdToIncrement = action.payload;
      const incrementedRobots = state.selectedRobots.map((robot, index) =>
        index === robotIdToIncrement
          ? { ...robot, quantity: robot.quantity + 1, totalPrice: (robot.quantity + 1) * robot.price }
          : robot
      );
      return {
        ...state,
        selectedRobots: incrementedRobots,
      };

    case DECREMENT_QUANTITY:
      const robotIdToDecrement = action.payload;
      const decrementedRobots = state.selectedRobots.map((robot, index) =>
        index === robotIdToDecrement
          ? { ...robot, quantity: robot.quantity - 1, totalPrice: (robot.quantity - 1) * robot.price }
          : robot
      );
      return {
        ...state,
        selectedRobots: decrementedRobots,
      };

    case REMOVE_FROM_CART:
      const robotIdToRemove = action.payload;
      const updatedRobots = state.selectedRobots.filter((_, index) => index !== robotIdToRemove);
    return {
      ...state,
      selectedRobots: updatedRobots,
    };

    default:
      return state;
  }
};

export default reducer;
