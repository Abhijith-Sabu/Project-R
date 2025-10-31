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
            <SafeAreaView style={{flex: 1, backgroundColor: '#1A1A1D'}}>

                <KeyboardAvoidingView
                style={{flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
                >

                    <View style={styles.mainContainer}>

                    </View>

                    <TextInput
                    style={styles.inputField}
                    placeholder="Type your question"
                    placeholderTextColor="black"
                    cursorColor='black'
                    />

                </KeyboardAvoidingView>
                
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',

        backgroundColor: '#1A1A1D',
    },

    inputField: {
        height: 60,
        width: '90%',

        color: 'black',
        backgroundColor: '#D3ECCD',

        borderRadius: 10
    }
})