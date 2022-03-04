import React from "react";
import { View } from "react-native";

import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from '../../components/background';
import { Header } from '../../components/header';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

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

    </Background>
);
}