import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import colors from "@/theme/colors";

import Ionicons from '@expo/vector-icons/Ionicons';
import Receipt from "@/components/receipt";
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
                        <View style={styles.topbuttonContainer}>
                            <Link href="/settings" asChild>
                                <TouchableOpacity style={styles.settings}>
                                    <Ionicons name="settings" size={24} color="white" />
                                </TouchableOpacity>
                            </Link>
                        </View>

                        <View style={styles.topbuttonContainer}>
                            <TouchableOpacity style={styles.filter}>
                                <FontAwesome name="sliders" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                <FlatList
                style={{flex:1}}
                contentContainerStyle={styles.receiptScroll}
                data={data}
                keyExtractor={( item ) => item.id.toString()}
                renderItem={({ item }) => (
                    <Receipt
                    id={item.id}
                    amount={item.amount}
                    date={item.date} />
                )}
                />

            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    receiptContainer: {
        flex: 1,
        
        backgroundColor: colors.background
    },

    topnav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: 8,
        backgroundColor: colors.background,
    },

    settings: {
        padding: 8,
        borderRadius: 10,

        backgroundColor: colors.background
    },

    topbuttonContainer: {
        borderRadius: 10,
        backgroundColor: colors.secbackground
    },

    filter: {
        padding: 8,
        borderRadius: 10,

        backgroundColor: colors.background
    },

    receiptScroll: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        paddingBottom: 70,

        // borderWidth:10,
        // borderColor: 'red',
    },
})  