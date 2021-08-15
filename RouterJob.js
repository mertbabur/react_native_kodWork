import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Detail from "./src/pages/Detail";
import Router from "./Router";
import UserProvider from "./src/context/Provider";

const Stack = createStackNavigator();

const RouterJob = () => {
    return(
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"RouterPage"} component={Router} options={{ headerShown: false }}/>
                    <Stack.Screen name={"DetailPage"} component={Detail} options={{
                        title: "DETAIL",
                        headerTitleAlign: 'center',
                        headerTitleStyle:{color: '#ef5350', fontWeight: 'bold'}
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    )
}

export default RouterJob;