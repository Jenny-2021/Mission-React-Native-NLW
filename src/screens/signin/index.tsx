import React  from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, 
    View, 
    Image,
    } from 'react-native';

import { ButtonIcon } from "../../components/buttonIcon";
import { Background } from '../../components/background';
import IllustrationImg from '../../assets/illustration.png';
import {styles} from './styles';


export function Signin() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate( 'Home' );
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                Conecte-se {`\n`}
                e organize suas {`\n`}
                jogatinas
                </Text>

                <Text style={styles.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
                </Text>

                <ButtonIcon 
                title="Entrar com Discord"
                onPress={handleSignIn}
                />
            </View> 
        </View>        
        </Background> 
    );
}