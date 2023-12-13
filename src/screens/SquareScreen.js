import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';
import reducer from '../state/reducers/ColorReducer';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch(color){
     case 'red':
      red + change > 255 || red + change < 0 ? null : setRed(red + change)
      break
    case 'green':
      green + change > 255 || green + change < 0 ? null : setGreen(green + change)
      break
    case 'blue':
      blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
      break
    default:
      return;
    }
  }

  return (
    <View>
      <ColorCounter 
        color='Red' 
        onIncrease={() => setColor('red', COLOR_INCREMENT)} 
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter 
        color='Green' 
        onIncrease={() => setColor('green', COLOR_INCREMENT)} 
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter 
        color='Blue' 
        onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />
      <View style={{width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  )
}

const SquareScreen2 = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  return (
    <View>
          <ColorCounter 
            color='Red' 
            onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
          />
          <ColorCounter 
            color='Green' 
            onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
          />
          <ColorCounter 
            color='Blue' 
            onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
          />
          <View style={{width: 100, height: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
    </View>
  )
}

const styles = StyleSheet.create({});

export default SquareScreen2;