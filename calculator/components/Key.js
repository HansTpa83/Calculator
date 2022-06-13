import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Key = ({btn,  addCalcul, equals}) => {

    if (btn === '='){
        return (
            <View>
                <Text style={styles.equal}
                    onPress={() => equals()}
                >
                    {btn}   
                </Text>
            </View>
        )
    } else {
        return (
            <View>
                <Text 
                    style={styles.key}
                    onPress={() => addCalcul(btn)}
                >
                    {btn}   
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    key:{
        width: 70,
        height: 70,
        margin: 5,

        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
        fontWeight: 'bold',

        borderRadius: 10,

        backgroundColor: '#ffdd5e',
        elevation: 10,
    }, 
    equal:{
        width: 160,
        height: 70,
        margin: 5,

        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
        fontWeight: 'bold',

        borderRadius: 10,

        backgroundColor: '#ffdd5e',
        elevation: 10,
    }
})

export default Key;
