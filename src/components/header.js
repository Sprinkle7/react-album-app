// Libraries
import React from 'react';
import { Text, View } from 'react-native';


// Make a registerComponent
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerTitle}</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make it available
export default Header;
