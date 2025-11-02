import { StyleSheet, View, Text, ScrollView} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import ProfileCircle from "@/components/profilecircle";
import Receipt from "@/components/receipt";


export default function App() {

      const data = [
        { id: 1, amount: 345, date: new Date() },
        { id: 2, amount: 120, date: new Date() },
        { id: 3, amount: 999, date: new Date() },
        { id: 4, amount: 200, date: new Date() },
        { id: 5, amount: 200, date: new Date() },
        { id: 6, amount: 200, date: new Date() },
        { id: 7, amount: 200, date: new Date() },
        { id: 8, amount: 200, date: new Date() },
        { id: 9, amount: 200, date: new Date() },
        { id: 10, amount: 200, date: new Date() },
      ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>

          <View style={styles.row1}>

            <ProfileCircle />

          </View>

          <ScrollView style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          >

            <Text
            style={{              
              color: 'white',
              alignSelf: 'flex-start',

              fontWeight: '500',
              fontSize: 16,

              marginTop: 10,
              marginBottom: 40,
              marginLeft: 20,
            }}
            >
              Receipts from today
            </Text>
            
            {data.map((item) => ( <Receipt key={item.id}
            id={item.id}
            amount={item.amount}
            date={item.date}/> ))}

          </ScrollView>

          <View style={styles.row3} >
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
    flex: .06,
    flexDirection: 'row-reverse',

    backgroundColor: '#1A1A1D',

    padding: 20,
  },

  scroll: {
    flex: 1,
    backgroundColor: '#1A1A1D',
  },

  scrollContent: {
    flexDirection: 'column',
    alignItems: 'center',

    padding: 10,
    backgroundColor: '#1A1A1D',
  },

  row3: {
    flex: 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#1A1A1D',
  },

});