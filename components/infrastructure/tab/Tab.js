import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Auth, Hub } from 'aws-amplify';

import Icon from 'react-native-ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScheduleScreenNavigator from './schedule/index';
import ClassScreenNavigator from './classSignUp';
import StackNavigation from '../stack/Stack';
import StudentPortal from './studentPortal/index';
import VirtualClass from './virtualKarate/index';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
	const [user, setUser] = useState(undefined);
	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}
	};

	useEffect(() => {
		checkUser();
	}, []);
	useEffect(() => {
		const listener = (data) => {
			if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
				checkUser();
			}
		};
		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	if (user === undefined) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator />
			</View>
		);
	}
	return (
		<Tab.Navigator
			sceneContainerStyle={{ backgroundColor: '#0045b5' }}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = 'home';
					} else if (route.name === 'Class Sign Up') {
						iconName = 'account-group';
					} else if (route.name === 'Student Portal') {
						iconName = 'checkbox-multiple-blank-circle-outline';
					} else if (route.name === 'Schedule') {
						iconName = 'clock';
					} else if (route.name === 'Virtual Karate') {
						iconName = 'video-account';
					}

					return (
						(<Icon name={iconName} size={size} color={color} />),
						(
							<MaterialCommunityIcons
								name={iconName}
								size={size}
								color={color}
							/>
						)
					);
				},
				tabBarStyle: { backgroundColor: '#0045b5' },
				tabBarActiveBackgroundColor: 'white',
				tabBarInactiveTintColor: 'white',
			})}
		>
			<Tab.Screen
				name='Home'
				component={StackNavigation}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name='Class Sign Up'
				component={ClassScreenNavigator}
				options={{ headerShown: false }}
			/>
			{user ? (
				<Tab.Screen
					name='Student Portal'
					component={StudentPortal}
					options={{ headerShown: false }}
				/>
			) : undefined}
			<Tab.Screen
				name='Schedule'
				component={ScheduleScreenNavigator}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name='Virtual Karate'
				component={VirtualClass}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};
export default TabNavigation;
