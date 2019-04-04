import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  const { textStyle, viewStyle } = style
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const style = {
  viewStyle: {
    backgroundColor:'#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    height:80,
    paddingTop:30,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity:0.2,
    elevation:2,
    position:'relative'
  },
  textStyle: {
    fontSize: 20
  }
}
export { Header }
