import React from 'react';
import {StyleSheet, Dimensions, Button, View} from 'react-native';

export default()=>{
    return(
        <View style={styles.panel}>
            <Button title="Lista" />
            <Button title="Mostrar/ocultar" />
        </View>
    )
}

const styles = StyleSheet.create({

    panel:{
        flex: 1,
        flexDirection:'row',
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center'
    }

})