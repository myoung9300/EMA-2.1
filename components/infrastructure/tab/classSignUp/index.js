import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassSignUp from "./classSignUpScreen";
import Classes from "./classes";
import InstructorPVT from "./instructors/index";
import SemiPVT from "./semiPVT";
import InstructorCard from "./instructors/instructorCard";

const Stack = createNativeStackNavigator();

const ClassScreenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: "white",
				headerStyle: {
					backgroundColor: "#0045b5",
				},
			}}
		>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Class Screen"
				component={ClassSignUp}
			/>
			<Stack.Screen name="Weekly Schedule" component={Classes} />
			<Stack.Screen name="Private Lessons" component={InstructorPVT} />
			<Stack.Screen name="Semi pvt Lessons" component={SemiPVT} />
			<Stack.Screen
				name="Instructor Card"
				headerShown={false}
				component={InstructorCard}
			/>
		</Stack.Navigator>
	);
};

export default ClassScreenNavigator;
