import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Child = (p) => {
    return (
        <View>
            <Text style={styles.name}>{p.props}</Text>
        </View>
    );
};

export default Child;

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        letterSpacing: 1,
    },
});
