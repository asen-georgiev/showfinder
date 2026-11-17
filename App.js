import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SearchScreen from './screens/SearchScreen';
import ResultsScreen from './screens/ResultsScreen';
import DetailsScreen from './screens/DetailsScreen';
import { resultsHeaderOptions } from './styles/resultStyles';
const Stack = createNativeStackNavigator();

function SearchRoute({ navigation }) {
    return (
        <SearchScreen
            onSearch={(query) => navigation.navigate('Results', { query })}
        />
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Search"
                        component={SearchRoute}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Results"
                        component={ResultsScreen}
                        options={resultsHeaderOptions}
                    />
                    <Stack.Screen
                        name="Details"
                        component={DetailsScreen}
                        options={{ ...resultsHeaderOptions, title: 'Show Details' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
