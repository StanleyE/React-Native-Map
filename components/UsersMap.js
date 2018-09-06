import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
    return (
        <View style = {styles.mapContainer} >
            <MapView style = {styles.map} />
            <Text>Map should be here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        width: '100%',
        height: 400,
    },
    map: {
        width: '100%',
        height: '100%',
    }
})

export default usersMap;