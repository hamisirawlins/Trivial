import { React, useState } from 'react';
import { Text, View, FlatList,Dimensions } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TrivialCard, FocusedStatusBar, HomeHeader } from "../components";

const Home = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList data={NFTData}
                        renderItem={({ item }) => <TrivialCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        zIndex: -1
                    }}
                >
                    <View style={{ height: windowHeight* 0.8, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                    <View />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home