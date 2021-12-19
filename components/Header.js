import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import env from '../constants/env';

export const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{env.app_name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerTitle: {
        color: 'white',
        fontSize: 18,
      },
})
export default Header;
