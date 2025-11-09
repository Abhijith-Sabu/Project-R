import React from "react";
import { Drawer } from 'expo-router/drawer'
import colors from "@/theme/colors";

export default function DrawerLayout() {
    return(
        <Drawer
        screenOptions={{headerShown: false,
        drawerStyle: {
            backgroundColor: colors.background,
            width: '60%',
        },
        drawerLabelStyle: {
            color: "white",
            fontSize: 14,
        }
        }}>
            <Drawer.Screen
            name='(tabs)'
            options={{
                drawerItemStyle: {display: "none"},
            }}
            />

            <Drawer.Screen
            name="analytics"
            options={{
                title: "Analytics",
                drawerItemStyle: {
                    marginTop: 30,

                    borderRadius: 10,
                    backgroundColor: colors.secbackground

                }
            }}
            />

        </Drawer>
    );
}