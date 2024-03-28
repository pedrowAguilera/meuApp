import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/index'
import { PaginaDois } from './pages/paginaDois'
import { Ionicons } from '@expo/vector-icons/'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={30} color={"#4361EE"} name="home" />)
                        }
                        return (<Ionicons size={25} color={"#3A0CA3"} name="home-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="paginaDois"
                component={PaginaDois}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={30} color={"#4361EE"} name="lock-closed" />)
                        }
                        return (<Ionicons size={25} color={"#3A0CA3"} name="lock-closed-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}