import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Screen = ({calcul}) => {
    

    return (
        <View style={styles.screen}>
            <Text style={styles.result}>
                {calcul}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        fontSize: 12,
        elevation: 10,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        width: '100%',
        height: '30%',
    },
    result:{
        fontSize: 18,
    }
})

export default Screen;
