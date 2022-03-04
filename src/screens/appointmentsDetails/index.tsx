import React from "react";
import { 
    ImageBackground,
    Text,
    View,
    FlatList, 
} from "react-native";


import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from '../../components/background';
import { ButtonIcon } from '../../components/buttonIcon';
import { ListHeader } from '../../components/listHeader';
import { ListDivider } from '../../components/listDivider';
import { Header } from '../../components/header';
import { Member } from '../../components/member';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import  BannerImg  from "../../assets/banner.png"



export function AppointmentsDetails() {
const members = [
    {
        id:'1',
        username:'Jennifer',
        avatar_url:'https://github.com/Jenny-2021.png',
        status: 'online'
    },
    {
        id:'2',
        username:'Jennifer',
        avatar_url:'https://github.com/Jenny-2021.png',
        status: 'offline'
    },
    {
        id:'3',
        username:'Jennifer',
        avatar_url:'https://github.com/Jenny-2021.png',
        status: 'online'
    }
]

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
        
            <ListHeader
            title="Jogadores"
            subtitle="total 3"
            />
            <FlatList
            data={members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Member
                data={item}
                />
            )}
            ItemSeparatorComponent={() => <ListDivider/>}
            style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon
                title="Entrar no servidor do Discord"
                />
            </View>
        

    </Background>
);
}