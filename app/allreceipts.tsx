import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, Pressable } from "react-native";
import { Link } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

import Receipt from "@/components/receipt";
import BottomNav from "@/components/bottomnav";

export default function AllReceipts() {
    return (

        <SafeAreaProvider>
            <SafeAreaView style={styles.receiptContainer} >

                <View style={styles.topnav} >
                    <Link href="/settings" asChild>
                        <Pressable style={styles.settings}>
                            <Ionicons name="settings" size={24} color="white" />
                        </Pressable>
                    </Link>
                </View>

                <View style={styles.receipts} >

                    <Receipt />

                </View>

                <View style={styles.bottomnav}>
                    <BottomNav />
                </View>

            </SafeAreaView>
        </SafeAreaProvider> 
    )
}

const styles = StyleSheet.create({
    receiptContainer: {
        flex: 1,
        
        backgroundColor: "#1A1A1D"
    },

    topnav: {
        flex: 0.5,
        flexDirection: 'row',

        backgroundColor: '#1A1A1D',
    },

    settings: {
        width: 70,

        alignItems: 'center',
        justifyContent: 'center',
    },

    receipts: {
        flex: 6,
        alignItems: 'center',

        padding: 8,
        backgroundColor: '#1A1A1D'
    },

    bottomnav: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#1A1A1D',
    }
})  