import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    const [data, setData] = useState("Abinash");

    function updateData() {
        setData("Abinah Sonar");
    }

    return (
        <View
            style={{
                backgroundColor: "wheat",
                flex: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>{data}</Text>
            <TouchableOpacity onPress={updateData}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});

export default App;
