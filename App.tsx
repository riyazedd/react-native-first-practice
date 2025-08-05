import { 
	StyleSheet, Text, View, Alert, Image, Button, TouchableOpacity, Pressable, ScrollView,
	ActivityIndicator, Modal, TextInput
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react";
import TextComponent from "./src/components/TextComponent";
import GoldScreen from "./src/screens/GoldScreen";
import TomatoScreen from "./src/screens/TomatoScreen";
import PurpleScreen from "./src/screens/PurpleScreen";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigation/MainStackNavigator";

export default function App() {
	const [state, setState] = useState(0);
	const [visible,setVisible] = useState(false);
	const [text, setText] = useState("");

	const IncreaseValue = () => setState(prevState => prevState+1);
	const DecreaseValue = () => setState(prevState => prevState-1);

	const onButtonPress=()=>Alert.alert("Button Pressed!")
	return (
		// <SafeAreaView style={styles.container}>
		// 	<ScrollView showsVerticalScrollIndicator={false}>
		// 		<TextComponent />

		// 		<View style={styles.imgContainer}>
		// 			<Text>{text}</Text>
		// 			<TextInput style={styles.inputField}  placeholder="Enter Text here" value={text} onChangeText={setText} />
		// 			<Image source={require("./assets/icon.png")} style={styles.image1} />

		// 			<Image source={require("./assets/icon.png")} style={styles.image1} />

		// 			<TouchableOpacity onLongPress={onButtonPress}>
		// 				<Image source={{uri:"https://picsum.photos/200"}} style={styles.image2} blurRadius={10} />
		// 			</TouchableOpacity>

		// 			<Button title="Press Me!" onPress={onButtonPress}  />

		// 			<ActivityIndicator />
		// 			<ActivityIndicator size={"large"} color={"green"} />

		// 			<View style={styles.view1}>
		// 			<Button title="-" onPress={DecreaseValue} />
		// 				<Text style={styles.text1}>{state}</Text>
		// 			<Button title="+" onPress={IncreaseValue}/>
		// 			</View>

		// 			<View style={styles.modalBtn}>
		// 			<Button title="Show Modal" onPress={()=>setVisible(true)} />
		// 			</View>

		// 			<Modal visible={visible} animationType="slide">
		// 				<Text style={styles.title} >This is inside modal</Text>
		// 				<Button title="Hide Modal" onPress={()=>setVisible(false)} />
		// 			</Modal>

		// 		</View>
		// 	</ScrollView>
		// </SafeAreaView>
		// <GoldScreen />
		// <TomatoScreen />
		// <PurpleScreen />
		<NavigationContainer>
			<MainStackNavigator />
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		padding: 20,
// 	},

// 	title: {
// 		textAlign: "center",
// 		fontSize: 40,
// 		fontWeight: "bold",
// 	},

// 	subTitleText: {
// 		textAlign: "justify",
// 	},

// 	clickText: {
// 		color: "red",
// 		textDecorationLine: "underline",
// 	},

// 	imgContainer:{
// 		alignItems:"center",
// 		flex:1,
// 		flexDirection:"column",
// 		marginTop:10
// 	},

// 	image1:{
// 		width:300,
// 		height:300,
// 	},
// 	image2:{
// 		width:300,
// 		height:300,
// 		marginTop:10,
// 		borderRadius:150
// 	},
// 	button:{
// 		marginTop:10,
// 	},
// 	view1:{
// 		flex:1,
// 		flexDirection:"row"
// 	},
// 	text1:{
// 		fontSize:100,
// 		marginTop:10,
// 	},
// 	modalBtn:{
// 		marginTop:30,
// 	},
// 	inputField:{
// 		marginTop:30,
// 		borderColor:"gray",
// 		borderWidth:1,
// 		borderRadius:10,
// 		width:"80%"
// 	}
// });
