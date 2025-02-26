import React, { ReactNode } from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface WrapperProps {
    children: ReactNode;
    customStyle ?: object;
}

const WrapperComponent: React.FC<WrapperProps> = ({children,customStyle }) => {
    const safeAreaValue = useSafeAreaInsets();
    return (
        <View style={[styles.container,{ ...customStyle,paddingTop: Platform.OS == 'android' ? safeAreaValue.top : safeAreaValue.top}]}>
              <StatusBar barStyle={'dark-content'} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Adjust background color if needed,
    },
});

export default WrapperComponent;