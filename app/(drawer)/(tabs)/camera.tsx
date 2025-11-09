import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CameraView, CameraType, useCameraPermissions} from 'expo-camera'
import { Link } from "expo-router";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from "@/theme/colors";

export default function Camera() {

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    console.log("Permission:", permission)

    if (!permission) {
        return <View />;
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'))
    }
    return (
        
        <SafeAreaView style={styles.cameraContainer}>

            <View style={styles.row1}>
                <Link href="/" asChild>
                    <TouchableOpacity style={styles.backButton}>
                        <Ionicons name="chevron-back" size={34} color="#06923E" />
                    </TouchableOpacity>
                </Link>
            </View>

            <View style={styles.row2}>
                <CameraView style={styles.camera} facing={facing} />

                {!permission.granted ? 
                    <View style={styles.permissionOverlay}>
                        <View style={styles.miniMsgContainer}>
                            <Text style={styles.message}>We need your permission to access the camera</Text>
                            <TouchableOpacity style={styles.permissionContainer} onPress={() => {
                                if (permission.canAskAgain) {
                                    requestPermission();
                                } else {
                                    alert("Camera Permission has been permanently denied. Please enable it from system settings.")
                                }
                            }}>
                                <Text style={styles.permissionButton}>Grant Permission</Text>
                            </TouchableOpacity>
                        </View>
                    </View> :

                    undefined
                }
            </View>

            <View style={styles.row3}>
                <View style={styles.miniCol1}></View>

                <View style={styles.miniCol2}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
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
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: colors.background
    },

    row1: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: colors.background,

        paddingHorizontal: 20,
    },

    backButton: {
        alignItems: 'center',
        justifyContent: 'center',

        height: 40,
        width: 40,

        backgroundColor: colors.background
    },

    row2: {
        flex: 0.7,
    },

    msgContainer: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'transparent'
    },

    miniMsgContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        height: 200,
        width: 250,

        gap: 20,
        padding: 10,

        borderRadius: 10,
        
        backgroundColor: colors.secbackground
    },

    message: {
        textAlign: 'center',
        paddingBottom: 10,

        color: 'white'
    },

    permissionContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        height: 50,
        width: 150,

        borderRadius: 10,

        backgroundColor: colors.foreground,
    },

    permissionButton:{
        color: 'white',
    },

    camera: {
        flex: 1,
    },

    permissionOverlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },

    buttonContainer: {
        flexDirection: 'row',
        height: 60,
        width: 60,

        borderRadius: 30,

        backgroundColor: colors.foreground,
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

        backgroundColor: colors.background
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