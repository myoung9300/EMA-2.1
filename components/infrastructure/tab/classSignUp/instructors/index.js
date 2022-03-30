import React from 'react';
import {
	FlatList,
	SafeAreaView,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';

import styles from './styles';

const InstructorPVT = ({ navigation }) => {
	const instructors = [
		{
			id: '1',
			name: 'Master Young',
			picture1: require('../../../../../assets/images/instPics/matt1.jpg'),
			picture2: require('../../../../../assets/images/instPics/matt2.jpg'),
			aboutMe:
				'I started training in the martial arts when i was 7 years old, got my black belt at 10, and started teaching when I was 13 years old. Some of my favorite foods are: pizza, peanut butter & jelly sandwiches, and milk duds. I love training and teaching the martial arts to anyone that wants to learn!',
			email: 'myoung9300@yahoo.com',
			position: 'Head Instructor',
			calendly: 'https://calendly.com/masteryoung',
		},
		{
			id: '2',
			name: 'Mr. Cisneros',
			picture1: require('../../../../../assets/images/instPics/sal1.jpg'),
			picture2: require('../../../../../assets/images/instPics/sal2.jpg'),
			aboutMe:
				'I am a 3rd Degree Black Belt in Tae-Kwon_Do and a Purple Belt in Brazilian Ju-Jit-Su. I love my family and kids! I really like downloading music and creating all sorts of playlists to listen to. Whatever your in the mood for, one of my playlists will get you through...',
			email: 'cisnerosnorth@comcast.net',
			position: 'Admissions Director',
			calendly: 'https://calendly.com/mr-c',
		},
		{
			id: '3',
			name: 'Mr. Morrisey',
			picture1: require('../../../../../assets/images/instPics/nick1.jpg'),
			picture2: require('../../../../../assets/images/instPics/nick2.jpg'),
			aboutMe:
				'Teaching is my job, Acting is my passion! I have been training in the martial arts for over 15 years. I  am a 3rd Degree Black Belt, soon to test for my 4th. I went to collage to become  a set designer and I really love it!',
			email: 'nicmor2@gmail.com',
			position: 'Assistant Instructor',
			calendly: 'https://calendly.com/nicmor2',
		},
		{
			id: '4',
			name: 'Ms. Young',
			picture1: require('../../../../../assets/images/instPics/kaylee1.jpg'),
			picture2: require('../../../../../assets/images/instPics/kaylee2.jpg'),
			aboutMe:
				"I started training in the martial arts when I was 3 years old. I am currently a 3rd Degree Black Belt and an instructor here art EMA! I have 2 younger sisters that also do martial arts. I'm currently going to college at Metro State.",
			email: 'kayleeyoung222@gmail.com',
			position: 'Assistant Instructor',
			calendly: '',
		},
		{
			id: '5',
			name: 'Ms. Mestas',
			picture1: require('../../../../../assets/images/instPics/jessica1.jpg'),
			picture2: require('../../../../../assets/images/instPics/jessica2.jpg'),
			aboutMe:
				'I have been trainig in the martial arts for over 10 years. I am a 2nd Degree Black Belt working towards my next rank. I love spending time with my familiy and love teaching karate to kids and adults. I graduate High School in 2022 and plan on doing some traveling once I graduate. Some places that i would like to see are: Japan, Hawaii, and Italy.',
			email: 'jessiemessie2003@gmail.com',
			position: 'Assistant Instructor',
			calendly: '',
		},
		{
			id: '6',
			name: 'Ms. Graham',
			picture1: require('../../../../../assets/images/instPics/brandi1.jpg'),
			picture2: require('../../../../../assets/images/instPics/brandi2.jpg'),
			aboutMe:
				'I am a 1st Degree Black Belt at EMA. I have been training for a little over 5 years. I recently just got married to my high school sweet heart! I love the outdoors! I like to hike, swim, ski, and snowboard.',
			email: 'doritybee@gmail.com',
			position: 'Assistant Instructor',
			calendly: 'https://calendly.com/grahambee',
		},
	];
	const renderList = (item) => {
		return (
			<SafeAreaView style={styles.card}>
				<Card
					style={styles.cardOutsideView}
					onPress={() => navigation.navigate('Instructor Card', { item })}
				>
					<View style={styles.cardInsideView}>
						<Image style={styles.smallImage} source={item.picture1} />
						<View style={{ marginLeft: 30 }}>
							<Text style={styles.title}>{item.name}</Text>
							<Text style={styles.subTitle}>{item.position}</Text>
						</View>
					</View>
				</Card>
			</SafeAreaView>
		);
	};
	return (
		<SafeAreaView>
			<FlatList
				data={instructors}
				renderItem={({ item }) => renderList(item)}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

export default InstructorPVT;
