import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Categories } from '../../utils/categories';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';
import { Category } from '../category';

type props = {
    CategorySelected: string;
    setCategory: (categoryId:string) => void;
}

export function CategorySelect ({ 
    CategorySelected, 
    setCategory 
} : props){
    return(
     <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 40 }}
     >
         {
            Categories.map(category =>(
                <Category
                key={category.id}
                title={category.title}
                icon={category.icon}
                checked={ category.id === CategorySelected}
                onPress={() => setCategory(category.id)}
                />
            ))
         }
     </ScrollView>
    );
}