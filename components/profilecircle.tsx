import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function ProfileCircle() {
    return(
        <View style={styles.circleContainer}>

            <Link href="/profile" style={styles.profile}></Link>
        
        </View>
    )
}

const styles = StyleSheet.create({
    circleContainer: {
        height: 60,
        width: 60,

        backgroundColor: 'white',
        borderRadius: 30,
    },

    profile: {
        flex: 1,

        height: '100%',
        width: '100%',

        borderRadius: 100,
        backgroundColor: 'white'
    }
})