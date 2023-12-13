import React from 'react';

const reducer = (state, action) => {
  switch(action.colorToChange){
    case 'red':
      return {...state, red: state.red + action.amount};
    case 'green':
      return {...state, green: state.green + action.amount};
    case 'blue':
      return {...state, blue: state.blue + action.amount};
    default: state
  }
}

export default reducer;