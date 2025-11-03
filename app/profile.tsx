import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import colors from "@/theme/colors";

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.profileContainer}>

                <ScrollView
                contentContainerStyle={styles.scrollContainer} >

                    <View style={styles.headerContainer}>
                        <View style={styles.header}>

                        </View>

                    </View>

                    <View style={styles.row1}>
                        <View style={styles.miniContainer}>

                            <View style={styles.miniRow1} >
                                <Pressable style={styles.userImage}>
                                </Pressable>

                                <Pressable style={styles.userName}>
                                    <Text style={{color: 'white'}}>
                                        &northwind
                                    </Text>
                                </Pressable>
                            </View>

                            <View style={styles.miniRow2} >
                                <Text style={styles.miniRow2text}>
                                    Anandhu S
                                </Text>

                                <Text style={styles.miniRow2text}>
                                     DOB: 13-12-2002
                                </Text>
                            </View>

                            <View style={styles.miniRow3} ></View>

                        </View>
                    </View>

                    <View style={styles.row2}>
                        <View style={styles.miniContainer}>

                        </View>
                    </View>

                    <View style={styles.row3}>
                        <View style={styles.miniContainer}>

                        </View>
                    </View>

                    <View style={styles.row4}>
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
        backgroundColor: colors.background,
    },

    scrollContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',

        backgroundColor: colors.background,
    },

    headerContainer: {
        height: 70,
        width: "100%",

        padding: 10,
    },

    header: {
        height: '100%',
        width: '100%',

        borderRadius: 10,
        backgroundColor: colors.secbackground
    },

    row1: {
        height: 250,
        width: '100%',

        padding: 10,

        backgroundColor: colors.background,
    },

    miniContainer: {
        height: '100%',
        width: '100%',

        borderRadius: 10,
        backgroundColor: colors.secbackground,
    },

    miniRow1: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: 8,

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: colors.secbackground,
    },

    userImage: {
        height: 50,
        width: 50,

        borderRadius: 25,

        backgroundColor: 'white',
    },

    userName: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 10,
        padding: 10,
        backgroundColor: 'black'
    },

    miniRow2: {
        flex:0.35,
        flexDirection: 'column',
        justifyContent: 'center',

        padding: 8,

        gap: 10,

        backgroundColor: colors.secbackground
    },

    miniRow2text: {
        color: 'white',
        fontWeight: 500,
    },

    miniRow3: {
        flex: 0.35,

        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: colors.secbackground
    },

    row2: {
        height: 400,
        width: '100%',

        padding: 10,
        backgroundColor: colors.background,
    },

    row3: {
        height: 100,
        width: '100%',

        padding: 10,

        backgroundColor: colors.background,
    },

    row4: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        height: 200,
        width: '100%',

        paddingBottom: 10,
        
        backgroundColor: colors.background,
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

        backgroundColor: '#FB4141',
    },
})