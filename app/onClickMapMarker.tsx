import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { markers, mapFocus } from '../assets/markers';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export function onClickMapMarker(marker: any, index: any){
    return(
        <Callout>
            <View>
                <Text>{marker.name}</Text>
            </View>
        </Callout>
    );
}