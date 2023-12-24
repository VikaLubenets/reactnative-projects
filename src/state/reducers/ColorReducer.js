import React from 'react';

const reducer = (state, action) => {
  switch(action.type){
    case 'change_red':
      return (state.red + action.payload > 255 || state.red + action.payload < 0
      ? state :
      {...state, red: state.red + action.payload});
    case 'change_green':
      return (state.green + action.payload > 255 || state.green + action.payload < 0
        ? state :
        {...state, green: state.green + action.payload});
    case 'change_blue':
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state :
        {...state, blue: state.blue + action.payload});
    default: state
  }
}

export default reducer;