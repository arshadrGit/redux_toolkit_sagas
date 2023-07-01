import { View, Text } from 'react-native'
import React from 'react'
import Styles from './FloatButtonStyle'

const FloatButton = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>+</Text>
    </View>
  )
}

export default FloatButton