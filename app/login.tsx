import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.loginContainer}>

                <View style={styles.miniContainer1}>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Welcome to Receipt Manager</Text>
                    </View>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text>Button</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#1A1A1D',
    },

    miniContainer1: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',

        height: '40%',
        width: '70%',

        gap: 50,

        borderRadius: 10,

        backgroundColor: '#212121'
    },

    titleContainer: {

    },

    title: {
        color: 'white',
    },

    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        height: 40,
        width: 200,

        borderRadius: 10,

        backgroundColor: '#06923E'
    },

})