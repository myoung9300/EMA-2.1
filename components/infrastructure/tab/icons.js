import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Icons = {
	Ionicons,
	MaterialCommunityIcons,
};

const Icon = ({ type, name, color }) => {
	const iconSize = 30;
	const Tag = type;
	return (
		<>{type && name && <Tag name={name} size={iconSize} color={color} />}</>
	);
};

export default Icon;
