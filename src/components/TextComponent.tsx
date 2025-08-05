import { StyleSheet, View, Text, Alert } from "react-native";

const TextComponent = () => {
	return (
		<View>
			<Text style={styles.title}>Hello World!</Text>

			<Text style={styles.subTitleText}>
				Lorem ipsum dolor sit, amet
				<Text
					style={styles.clickText}
					onPress={() => Alert.alert("Text Pressed!")}
				>
					{" "}
					Press Here!{" "}
				</Text>
				consectetur adipisicing elit. Illum facilis voluptates commodi ratione
				nobis quis voluptatem non, qui fuga nesciunt esse enim laudantium
				eligendi accusamus modi nam expedita quae architecto.
			</Text>
		</View>
	);
};

export default TextComponent;

const styles = StyleSheet.create({
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
});
