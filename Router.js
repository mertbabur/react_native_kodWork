import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Jobs from "./src/pages/Jobs";
import FavoritedJobs from "./src/pages/FavoritedJobs/FavoritedJobs";

const Drawer = createDrawerNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="JobsPage">
                <Drawer.Screen name={"JobsPage"} component={Jobs} options={{
                    title: "JOBS",
                    drawerLabel: "JOBS"
                }} />
                <Drawer.Screen name={"FavoritedJobsPage"} component={FavoritedJobs} options={{
                    title: "FAVORITED JOBS",
                    drawerLabel: "FAVORITED JOBS"
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Router;