import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Child = (p) => {
    return (
        <View>
            <Text>{p.props}</Text>
        </View>
    );
};

export default Child;

const styles = StyleSheet.create({});
