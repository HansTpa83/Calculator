import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Screen = ({calcul, result}) => {
    

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.result}>
                    {result}
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.calc}>
                    {calcul}
                </Text>
            </View>
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
    container:{
        width: '100%'
    },
    result:{
        fontSize: 40,
        margin: 5,
        textAlign: 'right'
    },
    calc:{
        fontSize: 20,
        textAlign: 'right',
        margin: 5,
    }
})

export default Screen;
