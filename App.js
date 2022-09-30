import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Child from "./Child";
import { useState } from "react";

const App = () => {
    const [name, setName] = useState("Abinash");
    function updateData() {
        setName("Abinash Sonar");
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
            <Text>Props in React</Text>
            <Child props={name} />
            <TouchableOpacity onPress={updateData}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});

export default App;
