import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProfileCircle from "@/components/profilecircle";
import BottomNav from "@/components/bottomnav";
import Receipt from "@/components/receipt";

export default function App() {
  return (

    <SafeAreaView style={styles.mainContainer}>

        <View style={styles.row1}>

          <ProfileCircle />

        </View>

        <View style={styles.row2} >

          <Receipt />

        </View>

        <View style={styles.row3} >
          <BottomNav />
        </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },

  row1: {
    flex: .5,
    backgroundColor: 'white',
    flexDirection: 'row-reverse',

    padding: 20,
  },

  row2: {
    flex: 6,
    flexDirection: 'column',
    alignItems: 'center',

    padding: 10,
    backgroundColor: 'red',
  },

  row3: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'blue',
  },

});