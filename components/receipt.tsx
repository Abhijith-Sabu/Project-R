import React from "react";
import { StyleSheet, View } from "react-native";

export default function Receipt() {
    return (

        <View style={styles.receiptContainer} >

            <View style={styles.receiptHead} ></View>
            <View style={styles.receiptBody} ></View>

        </View>
    )
}

const styles = StyleSheet.create({
    receiptContainer: {
        height: '30%',
        width: '80%',

        borderRadius: 10,
    },

    receiptHead: {
        height: '20%',
        width: '100%',

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'black',
    },

    receiptBody: {
        height: '80%',
        width: '100%',

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

        backgroundColor: 'yellow',
    }
})