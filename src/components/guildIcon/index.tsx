import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
    const uri = 'https://external-preview.redd.it/sxlSzCfs7YffSIWiXhp41UkE7ku-3op6iEPJyS3CT-g.jpg?auto=webp&s=a7bfef2318059a67b4e1e5acf92e83a281bf2e5b';
    return (
        <Image
        source={{ uri }}
        style= {styles.image}
        resizeMode={"cover"}
        />
    )
}