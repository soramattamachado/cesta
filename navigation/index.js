import React from "react";
import { ActivityIndicator, View } from "react-native";
import AuthNavigator from "./authNavigator";
import MainNavigator from "./mainNavigator";
import { useAuth } from "../hooks/auth";
const Routes = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#999" />
            </View>
        );
    }
    return user ? <MainNavigator /> : <AuthNavigator />;
};

export default Routes;