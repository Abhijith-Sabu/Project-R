import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Receipt() {

    const today = new Date();
    const formattedDate = today.toDateString();

    return (

        <View style={styles.receiptContainer} >

            <View style={styles.receiptHead} >
                <View style={styles.headCol1}>
                    <Text style={styles.dateContainer}>
                        {formattedDate}
                    </Text>
                </View>

                <View style={styles.headCol2}>
                    <Text style={styles.amountContainer}>
                        345
                    </Text>
                </View>
            </View>

            <View style={styles.receiptBody} ></View>

        </View>
    )
}

const styles = StyleSheet.create({
    receiptContainer: {
        height: '30%',
        width: '90%',

        borderRadius: 10,
    },

    receiptHead: {
        flex: 1,
        flexDirection: 'row',
        height: '20%',
        width: '100%',

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#06923E',
    },

    headCol1: {
        flex: 0.5,

        alignItems: 'center',
        justifyContent: 'center',

        borderTopLeftRadius: 10,
    },

    dateContainer: {
        color: 'white',

    },

    headCol2: {
        flex: 0.5,

        alignItems: 'center',
        justifyContent: 'center',

        borderTopRightRadius: 10,
    },

    amountContainer: {
        color: 'white',
    },

    receiptBody: {
        height: '80%',
        width: '100%',

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

        backgroundColor: '#D3ECCD',
    }
})