import { View, StyleSheet } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import colors from '@/theme/colors';

import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { JSX } from 'react';

type TabRoute = 'index' | 'camera' | 'chat' | 'allreceipts';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {

  const { buildHref } = useLinkBuilder();

  const hiddenRoutes = ['camera', 'chat'];
  if (hiddenRoutes.includes(state.routes[state.index].name)) {
    return null;
  }

  const tabIcons: Record<TabRoute, (props: any) => JSX.Element> = {
    index: (props: any) => (
    <Entypo name="home" size={24} {...props} />
  ),
    camera: (props: any) => (
    <MaterialIcons name="camera" size={24} {...props}/>
  ),
    chat: (props: any) => (
    <MaterialCommunityIcons name="robot-excited" size={24} {...props}/>
  ),
    allreceipts: (props: any) => (
    <Ionicons name="receipt" size={24} {...props}/>
  )
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const IconComponent = tabIcons[route.name as TabRoute];
          
          return (
            <PlatformPressable

              key={route.name}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttons}
            >
              {IconComponent && IconComponent({
                color: isFocused ? colors.secforeground : 'white',
              })}

                {/* {tabIcons[route.name]({
                  color: isFocused ? colors.secforeground : 'white'
                })} */}
                
                <Text style={{
                  color: isFocused ? colors.secforeground : 'white'}}>
                  {label}
                </Text>


            </PlatformPressable>

          );
        })}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabBar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',

    height: 55,
    minWidth: '80%',
    maxWidth: 500,

    padding: 10,

    bottom: 30,

    elevation: 10,

    borderRadius: 10,
    backgroundColor: colors.foreground,
  },

  buttons: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    height: '100%',
  }
})