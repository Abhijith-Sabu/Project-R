import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type ReceiptProps = {
    id: number;
    amount: number;
    date: Date;
};

export default function Receipt({id, amount, date}: ReceiptProps) {

    const today = new Date();
    const formattedDate = today.toDateString();

    return (

            <View style={styles.receiptContainer} >

                <View style={styles.receiptHead} >

                    <View style={styles.headCol1}>
                        <View style={styles.id}>
                            <Text style={styles.idText}
                            >{id}</Text>
                        </View>

                        <Text style={styles.dateContainer}>
                            {formattedDate}
                        </Text>
                    </View>

                    <View style={styles.headCol2}>
                        <Text style={styles.amountContainer}>
                            ₹: {amount}
                        </Text>
                        <TouchableOpacity style={styles.deleteButton}>
                            <MaterialIcons name="delete-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.receiptBody} >
                </View>

            </View>
    )
}

const styles = StyleSheet.create({
    receiptContainer: {
        height: 200,
        width: '90%',

        paddingBottom: 8,
        borderRadius: 10,
    },

    receiptHead: {
        flexDirection: 'row',
        height: 45,
        width: '100%',

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#06923E',
    },

    headCol1: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'relative',

        borderTopLeftRadius: 10,
    },

    dateContainer: {
        color: 'white',

        paddingLeft: 20,
    },

    id: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 25,

        position: 'absolute',

        left: 10, 

        borderRadius: 8,

        backgroundColor: '#000000'
    },

    idText: {
        color: '#D3ECCD',
    },

    headCol2: {
        flex: 0.5,
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',

        position: 'relative',
        
        borderTopRightRadius: 10,

        // borderWidth:1,
        // borderColor: 'red',
    },

    amountContainer: {
        color: 'white',
    },

    deleteButton: {
        position: 'absolute',
        right: 10,
    },

    receiptBody: {
        height: 150,
        minWidth: '100%',

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

        // backgroundColor: '#D3ECCD',
        backgroundColor: '#212121',

        elevation: 50,
        
        // borderWidth:1,
        // borderColor: 'red',
    }
})