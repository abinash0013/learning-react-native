import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";

const Input = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.TextInput}
                placeholder="Enter Email"
                underlineColorAndroid="transparent"
                onChange={() => {
                    setName(e);
                }}
            />
            <TextInput
                style={styles.TextInput}
                underlineColorAndroid="transparent"
                placeholder="********"
                keyboardType="password"
                onChange={() => {
                    setPassword(e);
                }}
            />
            <TouchableOpacity style={styles.buttonBox}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "wheat",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 35,
    },
    TextInput: {
        borderWidth: 1,
        width: "100%",
        paddingHorizontal: 15,
        height: 45,
        margin: 10,
        borderRadius: 5,
        fontSize: 17,
    },
    buttonBox: {
        backgroundColor: "#fff",
        height: 50,
        width: "100%",
        paddingHorizontal: 15,
        height: 50,
        margin: 10,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        shadowColor: "#52006A",
    },
    buttonText: {
        // color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
});
