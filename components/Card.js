import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Card = props => {

    return(
        <View style={styles.card}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
         // shadow only works for ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        // elevation only works for android
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin:10
      },
})
export default Card