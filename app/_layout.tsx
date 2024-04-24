//_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => (
	<Stack>
		<Stack.Screen name="index" options={{ title: 'Home' }} />
		<Stack.Screen name="about" options={{ title: '' }} />
		<Stack.Screen name="animalInfo" options={{ title: '' }} />
		<Stack.Screen name="explore" options={{ title: 'Explore Wildlife' }} />
	</Stack>
	
);

export default Layout;