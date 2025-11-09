import { StyleSheet, View, ScrollView, TouchableOpacity} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

import ProfileCircle from "@/components/profilecircle";
import Receipt from "@/components/receipt";
import colors from "@/theme/colors";

import Entypo from '@expo/vector-icons/Entypo';

export default function Index() {

  const navigation = useNavigation();

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

  // const totalAmount = data.reduce((sum, item) => sum + item.amount, 0)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>

          <View style={styles.row1}>

            <View style={styles.hamburgerContainer}>
              <TouchableOpacity style={styles.hamburger}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Entypo name="menu" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View style={styles.hamburgerContainer}>
              <ProfileCircle />
            </View>

          </View>

          <ScrollView style={styles.scroll}
          contentContainerStyle={styles.scrollContent} >
                        
            {data.map((item) => ( <Receipt key={item.id}
            id={item.id}
            amount={item.amount}
            date={item.date}/> ))}

          </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.background,

    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  hamburgerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 10,
  },

  hamburger: {
  },

  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    flexDirection: 'column',
    alignItems: 'center',

    paddingBottom: 70,

    backgroundColor: colors.background,
  },
});