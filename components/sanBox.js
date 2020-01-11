import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

export default function Sandbox(){
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        flexDirection:'row',
        backgroundColor: '#ddd',
    },
    boxOne:{
        flex:1,
        padding:10,
        backgroundColor: 'violet',
    },
    boxTwo:{
        flex:1,
        padding:10,
        backgroundColor: 'gold',
    },
    boxThree:{
        flex:1,
        padding:10,
        backgroundColor: 'coral',
    },
    boxFour:{
        flex:1,
        padding:10,
        backgroundColor: 'skyblue',
    }
});