import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Jobs from "./src/pages/Jobs";
import FavoritedJobs from "./src/pages/FavoritedJobs/FavoritedJobs";

const Drawer = createDrawerNavigator();

const Router = () => {
    return (

            <Drawer.Navigator initialRouteName="JobsPage">
                <Drawer.Screen name={"JobsPage"} component={Jobs} options={{
                    title: "JOBS",
                    headerTitleAlign: 'center',
                    headerTitleStyle:{color: '#ef5350', fontWeight: 'bold'},
                    drawerLabel: "JOBS",
                    drawerActiveTintColor: '#ef5350',
                }} />
                <Drawer.Screen name={"FavoritedJobsPage"} component={FavoritedJobs} options={{
                    title: "FAVORITED JOBS",
                    headerTitleAlign: 'center',
                    headerTitleStyle:{color: '#ef5350', fontWeight: 'bold'},
                    drawerLabel: "FAVORITED JOBS",
                    drawerActiveTintColor: '#ef5350'
                }} />
            </Drawer.Navigator>
    );
}

export default Router;