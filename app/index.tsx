import { StyleSheet, View, Text} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import ProfileCircle from "@/components/profilecircle";
import BottomNav from "@/components/bottomnav";
import Receipt from "@/components/receipt";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>

          <View style={styles.row1}>

            <ProfileCircle />

          </View>

          <View style={styles.row2} >

            <Text
            style={{color: 'white',
              alignSelf: 'flex-start',

              fontWeight: '500',
              fontSize: 16,

              marginTop: 10,
              marginBottom: 40,
              marginLeft: 40,
            }}
            >Receipts from today</Text>

            <Receipt />

          </View>

          <View style={styles.row3} >
            <BottomNav />
          </View>

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
    flex: .5,
    backgroundColor: '#1A1A1D',
    flexDirection: 'row-reverse',

    padding: 20,
  },

  row2: {
    flex: 6,
    flexDirection: 'column',
    alignItems: 'center',

    padding: 10,
    backgroundColor: '#1A1A1D',
  },

  row3: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#1A1A1D',
  },

});