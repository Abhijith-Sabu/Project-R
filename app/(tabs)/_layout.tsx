import React from "react";
import { Tabs } from "expo-router";

import { TabBar } from "@/components/TabBar";

const TabLayout = () => {
  return (
    <Tabs 
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{headerShown: false}}
    >

      <Tabs.Screen name='index'
      options={{title: 'Home'}} />

      <Tabs.Screen name='camera'
      options={{title: 'Camera'}} />

      <Tabs.Screen name='chat'
      options={{title: 'AI'}} />

      <Tabs.Screen name='allreceipts'
      options={{title: 'Receipts'}} />

    </Tabs>
  )
}

export default TabLayout

// import { Tabs } from "expo-router";

// import Entypo from '@expo/vector-icons/Entypo';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// export default function RootLayout() {
//   return (
  
//   <Tabs 
//   // tabBar={props=> <TabBar {...props} />}
//   screenOptions={{headerShown: false,
//     tabBarInactiveTintColor: 'white',
//     tabBarActiveTintColor: '#D3ECCD',
//     sceneStyle: {backgroundColor: '#1A1A1D'},
//     tabBarStyle: {
//       position: 'absolute',

//       bottom : 25,

//       flexDirection: 'row',
//       alignSelf: 'center',
//       justifyContent: 'center',
      
//       height: 50,
//       width: '80%',
//       maxWidth: 500,

//       backgroundColor: '#06923E',

//       borderTopWidth: 0,
//       borderRadius: 10,
//       elevation: 0,
//       shadowOpacity: 0,
//     },

//     tabBarItemStyle: {
//       alignItems: 'center',
//       justifyContent: 'center',
//     },

//     tabBarIconStyle: {
//       margin : 0
//     },

//     tabBarLabelStyle: {
//       margin: 0,
//     }
//   }
// }
//   >

//     <Tabs.Screen
//     name="index"
//     options={{
//       title: 'Home',
//       tabBarIcon: ({ color }) => <Entypo name="home" size={24} color= {color} />

//     }} />

//     <Tabs.Screen 
//     name="camera"
//     options={{
//       tabBarStyle: { display: "none"},
//       title: "Camera",
//       tabBarIcon: ({ color }) => <MaterialIcons name="camera" size={24} color="white" />


//     }}
//       />

//     <Tabs.Screen
//     name="chat"
//     options={{
//       tabBarStyle: { display: "none"},
//       title: 'AI',
//       tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-excited" size={24} color="white" />                  


//     }} />

//     <Tabs.Screen 
//     name="allreceipts"
//     options={{
//       title: "Receipts",
//       tabBarIcon: ({ color }) => <Ionicons name="receipt" size={24} color= { color } /> 

//     }}
//       />
    
//   </Tabs>

//   );
// }
