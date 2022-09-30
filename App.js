import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Child from "./Child";
import { useState } from "react";

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.redbox} />
            <View style={styles.bluebox} />
            <View style={styles.blackbox} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    redbox: {
        backgroundColor: "red",
        height: 100,
        width: 100,
    },
    bluebox: {
        backgroundColor: "blue",
        height: 100,
        width: 100,
    },
    blackbox: {
        backgroundColor: "black",
        height: 100,
        width: 100,
    },
});

export default App;
// const App = () => {
//     const [name, setName] = useState("Abinash.");
//     function updateData() {
//         setName("Abinash Sonar.");
//     }
//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>Props in React</Text>
//             <Child props={name} />
//             <TouchableOpacity style={styles.button} onPress={updateData}>
//                 <Text style={styles.buttonText}>Click Me</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "wheat",
//         flex: 1,
//         display: "flex",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//     },
//     heading: {
//         fontSize: 30,
//         marginVertical: 10,
//     },
//     name: {
//         fontSize: 20,
//         color: "red",
//     },
//     button: {
//         backgroundColor: "#fff",
//         paddingVertical: 8,
//         paddingHorizontal: 25,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: "#20232a",
//         // shadowNotWorking
//         shadowColor: "#171717",
//         shadowOffset: { width: -2, height: 4 },
//         shadowOpacity: 9,
//         shadowRadius: 3,
//     },
//     buttonText: {
//         letterSpacing: 1,
//         fontSize: 15,
//         fontWeight: "bold",
//     },
// });

// export default App;
