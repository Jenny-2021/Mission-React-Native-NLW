import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { CategorySelect } from "../../components/categorySelect";
import { Appointment } from "../../components/appointment";
import { ListDivider } from "../../components/listDivider";
import { ListHeader } from "../../components/listHeader";
import { Background } from '../../components/background';
import { ButtonAdd } from "../../components/buttonAdd";
import { Profile } from "../../components/profile";

import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');
    const appointments = [
        {
            id:'1',
            guild:{
                id:'1',
                name: 'lendários',
                icon: null,
                owner: true
            },
            category:'1',
            date:'18/02 às 19:00h',
            description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
        id:'2',
        guild:{
            id:'1',
            name: 'lendários',
            icon: null,
            owner: true
        },
        category:'1',
        date:'18/02 às 19:00h',
        description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    ]

function handleCategorySelect(categoryId : string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
}

return (
    <Background>
        <View style={styles.header}>
            <Profile/>
            <ButtonAdd/>
        </View>
            <CategorySelect 
            categorySelected={category}
            setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
            <ListHeader
            title="Partidas agendadas"
            subtitle="Total 6"
            />
            <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <Appointment data={item}/>
            )}
            ItemSeparatorComponent={() => <ListDivider/>}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            />
        </View>

    </Background>
);
}