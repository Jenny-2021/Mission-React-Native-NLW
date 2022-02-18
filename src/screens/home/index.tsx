import React, { useState } from "react";
import { View } from "react-native";

import { ButtonAdd } from "../../components/buttonAdd";
import { CategorySelect } from "../../components/categorySelect";
import { Profile } from "../../components/profile";

import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');

function handleCategorySelect(categoryId : string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
}

return (
    <View>
        <View style={styles.header}>
            <Profile/>
            <ButtonAdd/>
        </View>
        <View>
            <CategorySelect 
            categorySelected={category}
            setCategory={handleCategorySelect}
        />
        </View>

    </View>
);
}