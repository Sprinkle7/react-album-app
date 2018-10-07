import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};


const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10
  }
}
export default Button;
