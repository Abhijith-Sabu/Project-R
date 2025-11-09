import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/theme/colors";

export default function Settings() {
    return (

        <SafeAreaView style={styles.settingsContainer}>

            <View style={styles.row1}>
                <View style={styles.row1text}>
                    <Text style={{color: 'white',
                        alignSelf: 'flex-start',
                        fontSize: 18,
                        fontWeight: 'bold'}}>Settings</Text>
                </View>
            </View>

            <View style={styles.row2}></View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    settingsContainer: {
        flex: 1,

        backgroundColor: colors.background
    },

    row1: {
        flex: 0.06,

        backgroundColor: colors.background
    },

    row1text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        paddingLeft: 30,
    },

    row2: {
        flex: 0.94,

        backgroundColor: colors.background
    },
})