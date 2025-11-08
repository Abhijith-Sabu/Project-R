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