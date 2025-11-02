import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

import Receipt from "@/components/receipt";

export default function AllReceipts() {

      const data = [
        { id: 1, amount: 345, date: new Date() },
        { id: 2, amount: 120, date: new Date() },
        { id: 3, amount: 999, date: new Date() },
        { id: 4, amount: 200, date: new Date() },
        { id: 5, amount: 200, date: new Date() },
        { id: 6, amount: 200, date: new Date() },
        { id: 7, amount: 200, date: new Date() },
        { id: 8, amount: 200, date: new Date() },
        { id: 9, amount: 200, date: new Date() },
        { id: 10, amount: 200, date: new Date() },
      ];

    return (

            <SafeAreaView style={styles.receiptContainer} >

                <View style={styles.topnav} >
                    <Link href="/settings" asChild>
                        <Pressable style={styles.settings}>
                            <Ionicons name="settings" size={24} color="white" />
                        </Pressable>
                    </Link>
                </View>

                <ScrollView
                style={styles.receiptScroll}
                contentContainerStyle={styles.receipts}
                >

                    {data.map((item) =>
                    <Receipt key={item.id}
                    id={item.id}
                    amount={item.amount}
                    date={item.date}/>
                    )}

                </ScrollView>

                <View style={styles.bottomnav}>
                </View>

            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    receiptContainer: {
        flex: 1,
        
        backgroundColor: "#1A1A1D"
    },

    topnav: {
        flex: 0.1,
        flexDirection: 'row',

        paddingLeft: 8,
        backgroundColor: '#1A1A1D',
    },

    settings: {
        width: 70,

        alignItems: 'center',
        justifyContent: 'center',
    },

    receiptScroll: {
        flex: 1,
    },

    receipts: {
        alignItems: 'center',

        padding: 8,
        backgroundColor: '#1A1A1D'
    },

    bottomnav: {
        flex: 0.12,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#1A1A1D',
    }
})  