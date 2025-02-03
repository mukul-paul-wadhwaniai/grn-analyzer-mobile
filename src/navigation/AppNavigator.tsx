import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@screens/HomeScreen';
import AssessmentScreen from '@screens/AssessmentScreen';
import ResultScreen from '@screens/ResultScreen';
import ReportsScreen from '@screens/ReportsScreen';
import LanguageSelectionScreen from '@screens/LanguageSelectionScreen';
import LoginScreen from '@screens/LoginScreen';
import { StatusBar, StyleSheet } from 'react-native';
import { Color } from '@styles/global';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LanguageSelection"
        screenOptions={{
          cardStyle: styles.screenOptions,
        }}>
        <Stack.Screen
          name="LanguageSelection"
          component={LanguageSelectionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Assessment" component={AssessmentScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  screenOptions: {
    backgroundColor: Color.colorWhite,
    paddingTop: StatusBar.currentHeight || 0,
  },
});
