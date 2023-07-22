import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QuestionList from './src/screens/QuestionList';

//bottom tab icons
import ReactIcon from './src/assets/reactIcon.svg';
import ReactNativeIcon from './src/assets/reactNativeIcon.svg';
import NodeIcon from './src/assets/nodejsIcon.svg';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const TABS_ICON_HEIGHT = 20;
  const TABS_ICON_WIDTH = 20;

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="React"
          children={() => <QuestionList tag={'react'} />}
          options={{
            tabBarIcon: () => (
              <ReactIcon height={TABS_ICON_HEIGHT} width={TABS_ICON_WIDTH} />
            ),
          }}
        />
        <Tab.Screen
          name="React Native"
          children={() => <QuestionList tag={'react-native'} />}
          options={{
            tabBarIcon: () => (
              <ReactNativeIcon
                height={TABS_ICON_HEIGHT}
                width={TABS_ICON_WIDTH}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Node"
          children={() => <QuestionList tag={'nodejs'} />}
          options={{
            tabBarIcon: () => (
              <NodeIcon height={TABS_ICON_HEIGHT} width={TABS_ICON_WIDTH} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
