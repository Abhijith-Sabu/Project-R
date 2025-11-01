import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet,
View,
TextInput,
KeyboardAvoidingView,
Platform,
} from "react-native";


export default function Chat() {
    return (

        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.row1}></View>

            <KeyboardAvoidingView style={styles.row2}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
            >   
                <View style={styles.display}></View>
            
            </KeyboardAvoidingView>
                                
                <View style={styles.row3}>
                    <TextInput style={styles.textInput}></TextInput>
                </View>

        </SafeAreaView>
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
    },

    row3: {
        flex: 0.1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'blue',
    },

    textInput: {
        height: 55,
        width: '90%',

        borderRadius: 50,

        backgroundColor: 'green'
    }
})