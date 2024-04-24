import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

function Audio1() {
  const video = React.useRef(null);
  const [showControls, setShowControls] = useState(true);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nesewin Sculpture</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Audio1: Click Below for Audio tour"
          onPress={toggleControls}
          color="#3CB371" // Adjusted button color
        />
      </View>
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/music/Papercut.mp3")}
          useNativeControls={showControls}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

export default Audio1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a9a87', 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#fff', 
  },
  buttonContainer: {
    marginBottom: 20, 
  },
  videoContainer: {
    width: '90%', 
    aspectRatio: 16 / 9, 
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 6, 
    backgroundColor: '#5d6d5d', 
  },
  video: {
    flex: 1,
  },
});
