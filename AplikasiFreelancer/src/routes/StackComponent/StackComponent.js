import React from "react";
import { Detail } from "../../screen/Detail/Detail";
import { Home } from "../../screen/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

class StackComponent extends React.Component {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={ Home }
                    options={{
                        headerShown : false,
                        animation : "fade"
                    }}
                />
                
                <Stack.Screen 
                    name="Detail"
                    component={ Detail }
                    options={{
                        headerShown : false,
                        animation : "fade"
                    }}
                />
            </Stack.Navigator>
        )
    }
}

export default StackComponent