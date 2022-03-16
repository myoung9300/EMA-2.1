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
			picture:
				'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/131787071_10217586783249029_9055075386359666967_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9MW86_3jkCAAX-OgsCe&_nc_ht=scontent.fapa1-2.fna&oh=00_AT8JjGbjo9A2pnZf6TSIu4tMETZ_MkrQjerc7xc-1ZP2fg&oe=625675CF',
			aboutMe:
				'I like Pizza and spending time with my kids. I started trtaining in the martial arts when i was 7 years old, got my black belt at 10, and started teaching when i was 13 years old.',
			email: 'myoung9300@yahoo.com',
			position: 'Head Instructor',
			calendly: 'https://calendly.com/masteryoung',
		},
		{
			id: '2',
			name: 'Mr. Cisneros',
			picture:
				'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/117593717_3664293083595592_4434180618410705725_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Xrhht8Se9AAAX8aKQE2&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9S7yLKsYnjWBjcB_IhReHY1QFkYjfIy2K47QkLbmUuWw&oe=625798CD',
			aboutMe: 'I love to sniff glue',
			email: 'cisnerosnorth@comcast.net',
			position: 'Admissions Director',
			calendly: 'https://calendly.com/mr-c',
		},
		{
			id: '3',
			name: 'Mr. Morrisey',
			picture:
				'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/134690693_1649267918580046_415322359816813673_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bUvA4D9CV7cAX-Pv0oe&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-J0AiF7hvBOpkK5bDC84DcGkKyyDGUR0kQrTIw3rW4ww&oe=62585E57',
			aboutMe: 'Teaching is my job, Acting is my passion!',
			email: 'nicmor2@gmail.com',
			position: 'Assistant Instructor',
			calendly: 'https://calendly.com/nicmor2',
		},
		{
			id: '4',
			name: 'Ms. Young',
			picture:
				'https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-6/262391135_995920200957231_5657691625357639197_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=p_Q4pHgtAWYAX-2enMS&tn=nKbmER6Ch6H91Vcy&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_K2zm9qudqdSYLUeQM1deGfiT7Zy7hgZAgTBNDSk5L9Q&oe=6236E1CC',
			aboutMe: "I'm not sure what i want to be when I grow up...",
			email: 'kayleeyoung222@gmail.com',
			position: 'Assistant Instructor',
			calendly: '',
		},
		{
			id: '5',
			name: 'Ms. Mestas',
			picture:
				'https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-6/274947752_5650635398286163_2090798651017868885_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=d6PX1i86KpIAX8J8Gx1&_nc_ht=scontent.fapa1-1.fna&oh=00_AT-4xdpP5C0V5YnnQvbgbiyTKH3XGnHsR7d2M8RNheAxDg&oe=62375456',
			aboutMe: 'I want to move to Hawaii one day!',
			email: '',
			position: 'Assistant Instructor',
			calendly: '',
		},
		{
			id: '6',
			name: 'Ms. Graham',
			picture:
				'https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-6/249554762_707410518179_4278165660772803084_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OjyxEFfxkvQAX9bu57I&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-oriFeCqRTE7EVGyttzqegZPoNkbiRNB9kZKV_ZxKMzw&oe=62381437',
			aboutMe: 'I love the outdoors! I like to hike, swim, ski, and snowboard.',
			email: 'doritybee@gmail.com',
			position: 'Assistant Instructor',
			calendly: '',
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
						<Image
							style={styles.smallImage}
							source={{
								uri: item.picture,
							}}
						/>
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
