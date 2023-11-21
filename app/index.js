import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import theme from './assets/themes';



const Home = () => {
    return (
        <SafeAreaView>
            <View style={theme.Container}>
                <Text style={theme.Text}>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;