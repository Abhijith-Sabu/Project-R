import { Link } from 'expo-router';
import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BottomNav() {

    return (

        <View style={styles.bottomContainer}>

            <Link href="/" asChild >
                <Pressable style={styles.button}>
                    <Entypo name="home" size={24} color="white" />
                </Pressable>
            </Link>

            <Link href="/camera" asChild >
                <Pressable style={styles.button}>
                    <MaterialIcons name="camera" size={24} color="white" />
                </Pressable>
            </Link>
            
            <Link href="/chat" asChild >
                <Pressable style={styles.button}>
                    <MaterialCommunityIcons name="robot-excited" size={24} color="white" />                  
                </Pressable>
            </Link>

            <Link href="/allreceipts" asChild >
                <Pressable style={styles.button}>
                    <Ionicons name="receipt" size={24} color="white" /> 
                </Pressable>
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        height: '70%',
        width: '80%',

        borderRadius: 10,
        padding: 8,
        columnGap: 30,

        backgroundColor: '#06923E',
    },

    button: {
        height: '100%',
        width: '15%',

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#06923E',
        borderRadius: 10,
    },

    icon: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
})