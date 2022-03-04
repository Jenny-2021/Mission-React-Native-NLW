import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from "../global/styles/theme";

import { Home } from "../screens/home";
import { AppointmentsDetails } from "../screens/appointmentsDetails";
import { Signin } from "../screens/signin";


const { Navigator, Screen} = createStackNavigator();

export function AuthRoutes () {
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: theme.colors.secondary100
            }
        }}
      >
      
            <Screen
            name="Signin"
            component={Signin}
            />
            <Screen
            name= "Home"
            component={Home}
            />
            <Screen
            name= "AppointmentsDetails"
            component={AppointmentsDetails}
            />

        </Navigator> 
    )
    
}