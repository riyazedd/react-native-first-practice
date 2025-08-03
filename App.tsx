import { StyleSheet, Text, View, Alert, Image, Button, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	const onButtonPress=()=>Alert.alert("Button Pressed!")
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Hello World!</Text>

				<Text style={styles.subTitleText}>
					Lorem ipsum dolor sit, amet
					<Text style={styles.clickText} onPress={() => Alert.alert("Text Pressed!")}>
						{" "}
						Press Here!{" "}
					</Text>
					consectetur adipisicing elit. Illum facilis voluptates commodi ratione
					nobis quis voluptatem non, qui fuga nesciunt esse enim laudantium
					eligendi accusamus modi nam expedita quae architecto.
				</Text>

				<View style={styles.imgContainer}>
					<Image source={require("./assets/icon.png")} style={styles.image1} />

					<Image source={require("./assets/icon.png")} style={styles.image1} />

					<TouchableOpacity onLongPress={onButtonPress}>
						<Image source={{uri:"https://picsum.photos/200"}} style={styles.image2} blurRadius={10} />
					</TouchableOpacity>

					<Button title="Press Me!" onPress={onButtonPress}  />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
	},

	title: {
		textAlign: "center",
		fontSize: 40,
		fontWeight: "bold",
	},

	subTitleText: {
		textAlign: "justify",
	},

	clickText: {
		color: "red",
		textDecorationLine: "underline",
	},

	imgContainer:{
		alignItems:"center",
		marginTop:10
	},

	image1:{
		width:300,
		height:300,
	},
	image2:{
		width:300,
		height:300,
		marginTop:10,
		borderRadius:150
	},
	button:{
		marginTop:10,

	}
});
