import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { CameraView, CameraType, useCameraPermissions} from 'expo-camera'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Camera() {

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.cameraContainer}>
                <Text style={styles.message}>We need your permission to access the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'))
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.cameraContainer}>

                <View style={styles.row1}></View>

                <View style={styles.row2}>
                    <CameraView style={styles.camera} facing={facing} />
                </View>

                <View style={styles.row3}>
                    <View style={styles.miniCol1}></View>

                    <View style={styles.miniCol2}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                                <MaterialCommunityIcons name="camera-iris" size={44} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.miniCol3}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                                <MaterialIcons name="flip-camera-android" size={34} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: '#1A1A1D'
    },

    row1: {
        flex: 0.1,
        backgroundColor: '#1A1A1D'
    },

    row2: {
        flex: 0.7,
    },

    msgContainer: {

    },

    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },

    camera: {
        flex: 1,
    },

    buttonContainer: {
        flexDirection: 'row',
        height: 60,
        width: 60,

        borderRadius: 30,

        backgroundColor: '#06923E',
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },

    row3: {
        flex: 0.2,
        flexDirection: 'row',

        backgroundColor: '#1A1A1D'
    },

    miniCol1: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',

        // borderWidth: 1,
        // borderColor: 'white'
    },

    miniCol2: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',

        // borderWidth: 1,
        // borderColor: 'white'
    },

    miniCol3: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',

        // borderWidth: 1,
        // borderColor: 'white'
    }
})