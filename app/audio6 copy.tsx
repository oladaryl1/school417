import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av';


function audio1(props) {

    const video = React.useRef(null)
    const[status, setStatus] = React.useState({})
    const [showControls, setShowControls] =  useState(true)


    return (
       <View style={styles.container}>
        <Text style={styles.text}>
            Time travel to the distant past
        </Text>
        <Text style={styles.text}>
            Tap to view Media Controls
        </Text>
        <Video ref={video}
        style={styles.video} 
        source={require("../assets/music/numb.mp3")}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls={showControls}
        onPlaybackStatusUpdate={setStatus}
        />
        <StatusBar style='auto'/>


  
       </View>
    );
}

export default audio1;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text:{
        alignItems: "center",
        color: "blue",
        fontSize: 23,
        marginTop: 20
    },
    video:{
        flex:1,
        width: "100%"
    }
    
})