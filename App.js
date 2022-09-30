import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";
import ScrollViewExample from "./ScrollView";

//Scrollview Example
const App = () => {
    return (
        <View>
            <ScrollViewExample />
        </View>
    );
};

export default App;

// input in react Native
// const App = () => {
//     return (
//         <View>
//             <Input />
//         </View>
//     );
// };

// export default App;

// Listview in React Native
// const App = () => {
//     const data = [
//         { id: 1, name: "John Doe" },
//         { id: 2, name: "Victor Wayne" },
//         { id: 3, name: "Jane Doe" },
//     ];
//     return (
//         <View>
//             <Text>
//                 {data.map((item) => {
//                     // alert(data.length);
//                     <Text style={styles.text}>{item.name}</Text>;
//                 })}
//             </Text>
//         </View>
//     );
// };

// export default App;

// const styles = StyleSheet.create({
//     container: {},
//     text: {},
// });
