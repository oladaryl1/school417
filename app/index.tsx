import { Link, router } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function index(props) {
    return (
        <LinearGradient colors={['#87BB6A','#1B5E20']} style={styles.background}>
            <Image source={require('../assets/images/exploreLinks/logo.png')} style={styles.logo} />
            <Text style={styles.title}>
                DUNNING READ NATURAL AREA
            </Text>
            <Link style={styles.audioNavigate} href={"/audioTourMap"}>
                <Text style={styles.audioNavigateText}>Audio Tour</Text>
            </Link>
            <Link style={styles.exploreNavigate} href={"/explore"}>
                <Text style={styles.exploreNavigateText}>Explore Wildlife</Text>
            </Link>
            <View style={styles.infoNavigateContainer}>
                <Link style={styles.infoNavigateText} href={"/about"} >
                    <Text style={styles.infoNavigateText}>About Us</Text>
                </Link>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {  
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200, // Adjust the width and height as needed
        height: 200,
        marginBottom: 20,
        resizeMode: 'contain', // Adjust the resizeMode as needed
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: '#FFFFFF',
        marginBottom: 20,
        marginTop: 10, // Adjusted marginTop to make the title stand out at the top
    },
    audioNavigate: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginBottom: 20,
    },
    audioNavigateText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    exploreNavigate: {
        backgroundColor: '#388E3C',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginBottom: 20,
    },
    exploreNavigateText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    infoNavigateContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    infoNavigateText: {
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
});

export default index;
