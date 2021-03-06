import { View, Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from "../constants"
import {CircleButton} from "./Button"

const TrivialCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.medium,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "60%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }} />
          <CircleButton imgUrl={assets.heart} right={10} top={10}/>
          <Text>Trivia Card</Text>
      </View>
    </View>
  )
}

export default TrivialCard