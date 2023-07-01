import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Main from "./src/pages/Login/Main";

export type RootStackParamList = {
    Main: undefined;
    Login: undefined;
    SignUp: undefined;
  };

function AppInner() {
    const [isLogin, setIsLogin] = useState(false);
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <>
            {isLogin ? (<></>) : (
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={Main} options={{title:"Main"}}/>
                </Stack.Navigator>
                )}
        </>
    )
}

export default AppInner;
