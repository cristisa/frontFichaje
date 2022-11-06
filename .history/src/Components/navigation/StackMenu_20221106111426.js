import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../Pages/Login';

const Stack = createNativeStackNavigator();

export function StackMenu() {
    return (
        <Stack.Navigator>
            <Stack.Group>
                {/* Pantallas no autenticadas*/}
                <Stack.Screen name="login" component={Login} />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name="BottomTab" component={BottomTab} />
            </Stack.Group>
        </Stack.Navigator>
    );
}