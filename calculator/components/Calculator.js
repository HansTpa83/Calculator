import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Key from './Key.js'
import Screen from './Screen.js';

const Calculator = () => {
    const [calcul, setCalcul] = useState('')
    const [result, setResult] = useState('')

    const addCalcul = (val) => {
        if(val === 'C'){
            setCalcul('')
        } else if(val === '='){
            console.log("=")
        }else {
            setCalcul((calcul) => [...calcul, val])
        }
    }

    return (
        <View style={styles.container}>
            
            <Screen style={styles.screen} calcul={calcul}/>

            <View style={styles.separator}>
                <View style={styles.keyboard}>
                    <Key addCalcul={addCalcul} btn={'C'}/>
                    <Key addCalcul={addCalcul} btn={'('}/>
                    <Key addCalcul={addCalcul} btn={')'}/>
                    <Key addCalcul={addCalcul} btn={'/'}/>
                </View>

                <View style={styles.keyboard}>
                    <Key addCalcul={addCalcul} btn={'7'}/>
                    <Key addCalcul={addCalcul} btn={'8'}/>
                    <Key addCalcul={addCalcul} btn={'9'}/>
                    <Key addCalcul={addCalcul} btn={'x'}/>
                </View>

                <View style={styles.keyboard}>
                    <Key addCalcul={addCalcul} btn={'4'}/>
                    <Key addCalcul={addCalcul} btn={'5'}/>
                    <Key addCalcul={addCalcul} btn={'6'}/>
                    <Key addCalcul={addCalcul} btn={'-'}/>
                </View>

                <View style={styles.keyboard}>
                    <Key addCalcul={addCalcul} btn={'1'}/>
                    <Key addCalcul={addCalcul} btn={'2'}/>
                    <Key addCalcul={addCalcul} btn={'3'}/>
                    <Key addCalcul={addCalcul} btn={'+'}/>
                </View>

                <View style={styles.keyboard}>
                    <Key addCalcul={addCalcul} btn={'0'}/>
                    <Key addCalcul={addCalcul} btn={'.'}/>
                    <Key addCalcul={addCalcul} btn={'='}/>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffdd5e',
        height: '100%',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 60,
    },
    separator:{
        marginTop: 50,
    },  
    keyboard:{
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})

export default Calculator;
