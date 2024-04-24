import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

function AudioPlayer() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [showControls, setShowControls] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Indigenous Connections</Text>
            <Text style={styles.subtitle}>Audio2</Text>
            <View style={styles.videoContainer}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={require("../assets/music/inTheEnd.mp3")}
                    resizeMode="cover"
                    useNativeControls={showControls}
                    onPlaybackStatusUpdate={setStatus}
                />
            </View>
            <View style={styles.controlsContainer}>
                <TouchableOpacity
                    style={[styles.controlButton, { backgroundColor: showControls ? '#bbb' : '#ccc' }]}
                    onPress={() => setShowControls(!showControls)}
                >
                    <Text style={styles.controlButtonText}>{showControls ? 'Hide Controls' : 'Tap here to enable Audio Tour'}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style='auto'/>
        </View>
    );
}

export default AudioPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8a9a87',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    videoContainer: {
        
        width: '80%',
        borderRadius: 15,
        overflow: 'hidden',
        aspectRatio: 16/9,
    },
    video: {
        flex: 1,
        width: '100%',
    },
    controlsContainer: {
        marginTop: 20,
    },
    controlButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#bbb',
    },
    controlButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
