import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AppContainer = ({ children }) => (
<View style={styles.container}>{children}</View>
);

export default AppContainer;

const styles = StyleSheet.create({
container: {
    paddingTop: 50,
    flex: 1,
},
});
