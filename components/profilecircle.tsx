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
        height: '100%',
        width: '15%',

        backgroundColor: 'black',
        borderRadius: 10
    },

    profile: {
        flex: 1,

        height: '100%',
        width: '100%',

        borderRadius: 10,
        backgroundColor: 'black'
    }
})