import React, { useState } from "react";
import { 
    Text,
    View,
} from "react-native";


import { Background } from '../../components/background';
import { CategorySelect } from '../../components/categorySelect';

import { Header } from '../../components/header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';



export function AppointmentsCreate() {
const [category, setCategory] = useState('');

return (
    <Background>
        <Header
        title="Agendar partida"
        />
        <Text style={styles.label}>
            Categoria
        </Text>
        <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
        />
        <View style={styles.form}>

        </View>
    </Background>
);
}