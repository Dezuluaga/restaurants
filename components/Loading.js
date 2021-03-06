import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading({ isVisible, text }) {
    return (
        <Overlay>
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStye={styles.overlay}
            <View style={styles.View}>
                <ActivityIndicator
                    size = "large"
                    color = "#442484"
                />
                {
                    text && <Text style = {styles.text}>{ text }</Text>
                }
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    Overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#442484",
        borderWidth: 2,
        borderRadius: 10
    },

    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#442484",
        marginTop: 10
    }

})