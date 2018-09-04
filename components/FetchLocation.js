import React from 'react';
import { Button, StyleSheet } from 'react-native';

const fetchLocation = props => {
    return (
        <Button title='Get Location' style={styles.button} onPress={ props.onGetLocation } />
    );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'magenta',
    }
});

export default fetchLocation;