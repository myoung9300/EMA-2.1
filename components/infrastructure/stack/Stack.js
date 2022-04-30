import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, Hub } from "aws-amplify";

import HomePage from "./homePage";
import EmaPass from "../../emaPass";
import BasicHomeScreen from "../../basic";
import BasicPlayer from "../../basic/Basic.Player";
import Level1 from "../../level1";
import Level1Player from "../../level1/Lv1.Player";
import Level2Player from "../../level2/Lv2.Player";
import Level2 from "../../level2";
import Level3 from "../../level3";
import Level3Player from "../../level3/Lv3.Player";
import BlackBelt from "../../blackBelt";
import BBPlayer from "../../blackBelt/BB.Player";
import SecondBBPlayer from "../../blackBelt/SecondBB.Player";
import Exclusive from "../../exclusive";
import BeltTesting from "../../allStudents/BeltTesting";
import Itp from "../../allStudents/IntentToPromote";
import KarateHomeWork from "../../allStudents/KarateHomeworkCard";
import BBTesting from "../../allStudents/BBTesting";
import Level1Standards from "../../level1/standards";
import Level1Checklist from "../../level1/checklist";
import Level1Spar from "../../level1/sparringGear";
import Level1Manual from "../../level1/manual";
import Level2Manual from "../../level2/manual";
import Level2Standards from "../../level2/standards";
import Level2Checklist from "../../level2/checklist";
import Level2Spar from "../../level2/sparringGear";
import Level3Manual from "../../level3/manual";
import Level3Standards from "../../level3/standards";
import Level3Checklist from "../../level3/checklist";
import Swat1 from "../../blackBelt/swat1";
import SignInScreen from "../SigninScreen/SigninScreen";
import SignUpScreen from "../SignUpScreen/SignUpScreen";
import ConfirmEmailScreen from "../ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "../ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../NewPasswordScreen/NewPasswordScreen";
import Lvl1Breakdown from "../../emaPass/Lvl1Breakdown";
import Lvl2Breakdown from "../../emaPass/Lvl2Breakdown";
import Lvl3Breakdown from "../../emaPass/Lvl3Breakdown";
import EmaPassMon2 from "../../emaPass/Mon2Breakdown";
import EmaPassChonJi from "../../emaPass/EmaPass.youtube/EmaPass.Chonji";
import EmaPassTanGun from "../../emaPass/EmaPass.youtube/EmaPass.TanGun";
import EmaPassToSan from "../../emaPass/EmaPass.youtube/EmaPass.ToSan";
import EmaPassWonHyo from "../../emaPass/EmaPass.youtube/EmaPass.WonHyo";
import EmaPassYulGok from "../../emaPass/EmaPass.youtube/EmaPass.YulGok";
import EmaPassChungGun from "../../emaPass/EmaPass.youtube/EmaPass.ChungGun";
import EmaPassToiGye from "../../emaPass/EmaPass.youtube/EmaPass.ToiGye";
import EmaPassHwaRang from "../../emaPass/EmaPass.youtube/EmaPass.HwaRang";
import EmaPassPoEun from "../../emaPass/EmaPass.youtube/EmaPass.PoEun";
import EmaPassGyeBek from "../../emaPass/EmaPass.youtube/EmaPass.GyeBek";
import EmaPassExodus from "../../emaPass/EmaPass.youtube/EmaPass.Exodus";
import EmaPassChungMu from "../../emaPass/EmaPass.youtube/EmaPass.ChungMu";
import SemiPVT from "../tab/classSignUp/semiPVT";
import Notifications from "../../allStudents/Notifications/Notifications";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
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
			if (data.payload.event === "signIn" || data.payload.event === "signOut") {
				checkUser();
			}
		};
		Hub.listen("auth", listener);
		return () => Hub.remove("auth", listener);
	}, []);

	if (user === undefined) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator />
			</View>
		);
	}
	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: "white",
				headerStyle: {
					backgroundColor: "#0045b5",
				},
			}}
		>
			{user ? (
				<Stack.Group>
					<Stack.Screen
						name="HomeStack"
						options={{ headerShown: false }}
						component={HomePage}
					/>
					<Stack.Screen name="EMA Pass" component={EmaPass} />
					<Stack.Screen name="Exclusive" component={Exclusive} />
					<Stack.Screen name="Level 1 Breakdowns" component={Lvl1Breakdown} />
					<Stack.Screen name="Level 2 Breakdowns" component={Lvl2Breakdown} />
					<Stack.Screen name="Level 3 Breakdowns" component={Lvl3Breakdown} />
					<Stack.Screen name="Month 2 Breakdowns" component={EmaPassMon2} />
					<Stack.Screen name="Ema Pass Chon Ji" component={EmaPassChonJi} />
					<Stack.Screen name="Ema Pass Tan Gun" component={EmaPassTanGun} />
					<Stack.Screen name="Ema Pass To San" component={EmaPassToSan} />
					<Stack.Screen name="Ema Pass Won Hyo" component={EmaPassWonHyo} />
					<Stack.Screen name="Ema Pass Yul Gok" component={EmaPassYulGok} />
					<Stack.Screen name="Ema Pass Chung Gun" component={EmaPassChungGun} />
					<Stack.Screen name="Ema Pass Toi Gye" component={EmaPassToiGye} />
					<Stack.Screen name="Ema Pass Hwa Rang" component={EmaPassHwaRang} />
					<Stack.Screen name="Ema Pass Po Eun" component={EmaPassPoEun} />
					<Stack.Screen name="Ema Pass Gye Bek" component={EmaPassGyeBek} />
					<Stack.Screen name="Ema Pass Exodus" component={EmaPassExodus} />
					<Stack.Screen name="Ema Pass Chung Mu" component={EmaPassChungMu} />

					<Stack.Screen name="Basic" component={BasicHomeScreen} />
					<Stack.Screen name="Basic Player" component={BasicPlayer} />

					<Stack.Screen name="Level 1" component={Level1} />
					<Stack.Screen name="Level 1 Curriculum" component={Level1Player} />
					<Stack.Screen name="Level 1 Standards" component={Level1Standards} />
					<Stack.Screen name="Level 1 Checklist" component={Level1Checklist} />
					<Stack.Screen name="Level 1 Sparring Gear" component={Level1Spar} />
					<Stack.Screen name="Level 1 Manual" component={Level1Manual} />

					<Stack.Screen name="Level 2" component={Level2} />
					<Stack.Screen name="Level 2 Curriculum" component={Level2Player} />
					<Stack.Screen name="Level 2 Manual" component={Level2Manual} />
					<Stack.Screen name="Level 2 Standards" component={Level2Standards} />
					<Stack.Screen name="Level 2 Checklist" component={Level2Checklist} />
					<Stack.Screen name="Level 2 Sparring Gear" component={Level2Spar} />

					<Stack.Screen name="Level 3" component={Level3} />
					<Stack.Screen name="Level 3 Curriculum" component={Level3Player} />
					<Stack.Screen name="Level 3 Manual" component={Level3Manual} />
					<Stack.Screen name="Level 3 Standards" component={Level3Standards} />
					<Stack.Screen name="Level 3 Checklist" component={Level3Checklist} />

					<Stack.Screen name="Black Belt" component={BlackBelt} />
					<Stack.Screen name="Black Belt Curriculum" component={BBPlayer} />
					<Stack.Screen
						name="2nd Degree Curriculum"
						component={SecondBBPlayer}
					/>
					<Stack.Screen name="Black Belt Testing" component={BBTesting} />
					<Stack.Screen name="SWAT 1" component={Swat1} />

					<Stack.Screen name="Testing" component={BeltTesting} />
					<Stack.Screen name="Intent-To-Promote" component={Itp} />
					<Stack.Screen
						name="Karate Homework Card"
						component={KarateHomeWork}
					/>
					<Stack.Screen name="Push" component={Notifications} />
					<Stack.Screen name="Semi pvt Lessons" component={SemiPVT} />
				</Stack.Group>
			) : (
				<Stack.Group>
					<Stack.Screen
						name="Sign In"
						options={{ headerShown: false }}
						component={SignInScreen}
					/>
					<Stack.Screen
						name="Sign Up"
						options={{ headerShown: false }}
						component={SignUpScreen}
					/>
					<Stack.Screen
						name="Confirm Email"
						options={{ headerShown: false }}
						component={ConfirmEmailScreen}
					/>
					<Stack.Screen
						name="Forgot Password"
						options={{ headerShown: false }}
						component={ForgotPasswordScreen}
					/>
					<Stack.Screen
						name="New Password"
						options={{ headerShown: false }}
						component={NewPasswordScreen}
					/>
				</Stack.Group>
			)}
		</Stack.Navigator>
	);
};
export default StackNavigation;
