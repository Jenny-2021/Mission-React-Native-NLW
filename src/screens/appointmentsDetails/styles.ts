import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";
export const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    banner: {
        width:'100%',
        height: 234,
        marginBottom: 30
    },
    bannercontent: {
        flex: 1,
        justifyContent:'flex-end',
        paddingHorizontal:24,
        marginBottom: 30
    },
    title: {
        fontFamily:theme.fonts.title700,
        fontSize: 28,
        color:theme.colors.heading
    },
    subtitle: {
        fontFamily:theme.fonts.text400,
        fontSize: 13,
        color:theme.colors.heading
    },
    members:{
        marginLeft: 24,
        marginTop: 27,
    },
    footer: {
      paddingHorizontal: 24,
      paddingVertical: 20,
      marginBottom: getBottomSpace(),   
    },
})