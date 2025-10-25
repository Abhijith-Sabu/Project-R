import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

export default function Chat() {
    return (

        <SafeAreaView style={styles.chatContainer}>

            <View style={styles.topnav} ></View>

            <View style={styles.chatDisplay} ></View>

            <View style={styles.chatInput} ></View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: "yellow"
    },

    topnav: {
        flex: 0.5,

        backgroundColor: 'purple'
    },

    chatDisplay: {
        flex: 6,

        backgroundColor: 'skyblue'
    },

    chatInput: {
        flex: 0.8,

        backgroundColor: 'cyan'
    },
})