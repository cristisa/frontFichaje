import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../Pages/Login';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export function StackMenu() {

    const [isAuth, setIsAuth] = useState(false);
    return (
        <Stack.Navigator>
        {
            isAuth
            ?(
            <Stack.Group>
                <Stack.Screen name="BottomTab" component={BottomTab} />
            </Stack.Group>
            )
            :(
            <Stack.Group>
            {/* Pantallas no autenticadas*/}
                <Stack.Screen name="login" component={Login} />
            </Stack.Group>
            )
        }
        </Stack.Navigator>
    );
}