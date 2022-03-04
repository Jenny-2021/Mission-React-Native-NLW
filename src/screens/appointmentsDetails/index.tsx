import React from "react";
import { ImageBackground, Text, View } from "react-native";


import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from '../../components/background';
import { Header } from '../../components/header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import  BannerImg  from "../../assets/banner.png"



export function AppointmentsDetails() {

return (
    <Background>
        <Header
        title="Detalhes"
        action={
            <BorderlessButton>
                <Fontisto
                name="share"
                size={24}
                color={theme.colors.primary}
                />
            </BorderlessButton>
        }
        />

        <ImageBackground
        source={BannerImg}
        style={styles.banner}
        >
            <View style={styles.bannercontent}>
                <Text style={styles.title}>
                    Lendários
                </Text>
                <Text style={styles.subtitle}>
                É hoje que vamos chegar ao challenger sem perder uma partida da md10
                </Text>
            </View>
        </ImageBackground>

    </Background>
);
}