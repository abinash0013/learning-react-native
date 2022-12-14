import React, { Component } from "react";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";

const ScrollViewExample = () => {
    const data = [
        { name: "Ben", id: 1 },
        { name: "Susan", id: 2 },
        { name: "Robert", id: 3 },
        { name: "Mary", id: 4 },
        { name: "Daniel", id: 5 },
        { name: "Laura", id: 6 },
        { name: "John", id: 7 },
        { name: "Debra", id: 8 },
        { name: "Aron", id: 9 },
        { name: "Ann", id: 10 },
        { name: "Steve", id: 11 },
        { name: "Olivia", id: 12 },
    ];
    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((item, index) => (
                    <View key={item.id} style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};
export default ScrollViewExample;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        margin: 2,
        borderColor: "#2a4944",
        borderWidth: 1,
        backgroundColor: "#d2f7f1",
    },
});
