import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet,
View,
TextInput,
KeyboardAvoidingView,
Platform,
} from "react-native";


export default function Chat() {
    return (

        <SafeAreaProvider>
            <SafeAreaView style={styles.mainContainer}>

                <View style={styles.row1}></View>

                <KeyboardAvoidingView style={styles.row2}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.display}></View>
                                    
                    <View style={styles.row3}>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>

                </KeyboardAvoidingView>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

        backgroundColor: '#1A1A1D',
    },

    row1: {
        flex: 0.1,

        backgroundColor: 'red',
    },

    row2: {
        flex: 0.9,

        backgroundColor: 'white',
    },

    display: {
        flex: 1,

        // borderWidth: 1,
        // borderBlockColor: 'black'
    },

    row3: {
        flex: 0.1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        paddingBottom: 8,

        backgroundColor: 'blue',
    },

    textInput: {
        height: 55,
        width: '90%',

        borderRadius: 50,

        backgroundColor: 'green'
    }
})