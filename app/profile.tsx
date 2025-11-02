import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.profileContainer}>

                <ScrollView
                contentContainerStyle={styles.scrollContainer}
                >

                    <View style={styles.row1}>

                    </View>

                    <View style={styles.row2}>

                    </View>

                    <View style={styles.row3}>
                        <Link href="/login" asChild>
                            <TouchableOpacity style={styles.logoutButton}>
                                <AntDesign name="logout" size={24} color="black" />
                                <Text>Logout</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>

                </ScrollView>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: "#1A1A1D",
    },

    scrollContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',

        backgroundColor: 'red',
    },

    row1: {
        height: 250,
        width: '100%',

        backgroundColor: 'blue',
    },

    row2: {
        height: 400,
        width: '100%',

        backgroundColor: 'white',
    },

    row3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        height: 400,
        width: '100%',

        paddingBottom: 10,
        
        backgroundColor: 'orange',
    },

    logoutButton: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',

        height: 40,
        width: 100,

        gap: 10,

        borderRadius: 10,

        backgroundColor: 'red',
    },
})