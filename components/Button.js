import { TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
import { SHADOWS, SIZES } from '../constants'

export const CircleButton = ({imgUrl, handlePress,...props}) => {
    return (
        <TouchableOpacity style={{
            width: 50,
            height: 50,
            backgroundColor: 'transparent',
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
        }} onPress={handlePress}>
            <Image source={imgUrl} resizeMode='contain' style={{width:24, height: 24}}/>
        </TouchableOpacity>
    )
}

export default CircleButton