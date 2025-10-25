import { Link } from 'expo-router';
import React from "react";
import { StyleSheet, View } from "react-native";

export default function BottomNav() {
    return (

        <View style={styles.bottomContainer}>

            <Link href="/" style={styles.homeButton} ></Link>
            <Link href="/chat" style={styles.homeButton} ></Link>
            <Link href="/camera" style={styles.homeButton} ></Link>
            <Link href="/allreceipts" style={styles.homeButton} ></Link>

        </View>
    )
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

        backgroundColor: 'black',
    },

    homeButton: {
        height: '100%',
        width: '15%',

        backgroundColor: 'white',
        borderRadius: 10,
    }
})