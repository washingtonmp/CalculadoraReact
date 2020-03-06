

import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

export default props => {
    const stylesButton = [styles.button];
    
    //  Caso a props double estiver presente a propriedade buttonDouble sera adcionada ao array stylesButton
    if (props.double) stylesButton.push(styles.buttonDouble)

     //  Caso a props triple estiver presente a propriedade buttonTriple sera adcionada ao array stylesButton
    if (props.triple) stylesButton.push(styles.buttonTriple)

    //  Caso a props operation estiver presente a propriedade operationButton sera adcionada ao array stylesButton
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
  
};

const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',

    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width/4)*2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width/4)*3,
    }

});


