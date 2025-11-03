import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import colors from "@/theme/colors";

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.profileContainer} edges={['top', 'right', 'left']}>

                <ScrollView
                contentContainerStyle={styles.scrollContainer} >

                    <View style={styles.row1}>

                        <View style={styles.miniRow1} >
                            <View style={styles.userImageContainer}>

                            </View>

                            <View style={styles.userNameContainer} >
                                <Text style={styles.userNme}>
                                    northwind
                                </Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.row2}>

                    </View>

                    <View style={styles.row3}>

                    </View>

                    <View style={styles.row4}>

                        <View style={styles.contact}>

                            <Pressable style={styles.miniRow4}>
                                <Text style={styles.contactText} >Contact</Text>
                            </Pressable>
                            <Pressable style={styles.miniRow4}>
                                <Text style={styles.contactText} >Feedback</Text>
                            </Pressable>

                        </View>
                        
                        <View style={styles.bottomRow}>
                            <Link href="/login" asChild >
                                <TouchableOpacity style={styles.logoutButton}>
                                    <AntDesign name="logout" size={24} color="black" />
                                    <Text>Logout</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>

                    </View>

                    <Text></Text>

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
        flexDirection: 'column',
        alignItems: 'center',

        padding: 10,

        gap: 10,

        backgroundColor: colors.background,
    },

    row1: {
        height: 250,
        width: '100%',

        borderRadius: 10,
        elevation: 100,

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

        backgroundColor: 'red'
    },

    userImageContainer: {
        height: 50,
        width: 50,

        borderRadius: 25,

        backgroundColor: 'white'
    },

    userNameContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#000000'
    },

    userNme: {
        color: 'white'
    },

    row2: {
        height: 400,
        width: '100%',

        padding: 10,
        borderRadius: 10,
        elevation: 100,

        backgroundColor: colors.secbackground,
    },

    row3: {
        height: 100,
        width: '100%',

        padding: 10,
        borderRadius: 10,
        elevation: 100,

        backgroundColor: colors.secbackground,

    },

    row4: {
        flexDirection: 'column',

        width: '100%',

        padding: 10,
        borderRadius: 10,
        elevation: 100,
        gap: 60,

        backgroundColor: colors.secbackground,
    },

    contact: {
        width: '100%',
    },

    contactText: {
        color: colors.secforeground,
    },

    miniRow4: {
        flexDirection: 'column',
        justifyContent: 'center',

        paddingVertical: 10,
    },

    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        width: '100%',
    },

    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        height: 40,
        width: 100,

        gap: 10,

        borderRadius: 10,

        backgroundColor: '#FB4141',
    },
})