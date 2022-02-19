// Importing Native components for proper functioning of the app
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'

// Importing custom components to better configure the app (styling and back-end)
import { generatePassword } from '../components/generatePassword'
import colors from '../config/colors'

// Beginning the configuration of the Main screen
const Main = () => {

    // Defining variables which will be sent to the "generatePassword" component, to generate the password, depending on the amount of digits, letters and symbols
    const [digitCount, setDigitCount] = useState(4)
    const [lowerCaseCount, setLowerCaseCount] = useState(0)
    const [upperCaseCount, setUpperCaseCount] = useState(0)
    const [symbolCount, setSymbolCount] = useState(0)
    const [generatedPassword, setGeneratedPassword] = useState('Su4S&nh4')

    // The Main screen will render a container with a title and a Body, which will allow the user to generate a password via 4 inputs, one for each type of character
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Easy Password</Text>
            <View style={styles.readOnly}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Números"
                        onChangeText={(value) => {
                            setDigitCount(parseInt(value));
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Minúsculas"
                        onChangeText={(value) => {
                            setLowerCaseCount(parseInt(value));
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Maiúsculas"
                        onChangeText={(value) => {
                            setUpperCaseCount(parseInt(value));
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Símbolos"
                        onChangeText={(value) => {
                            setSymbolCount(parseInt(value));
                        }}
                    />
                </View>
                <View style={styles.passwordContainer}>
                    {/* Display the password generated to the user */}
                    <Text style={styles.yourPassword}>Sua senha:</Text>
                    <Text style={styles.passwordPreview}>{generatedPassword}</Text>
                </View>
            </View>
            {/* A button, that will generate the password */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setGeneratedPassword(
                        generatePassword(
                            lowerCaseCount,
                            upperCaseCount,
                            symbolCount,
                            digitCount
                        )
                    );
                }}>
                <Image
                    style={styles.image}
                    source={require('../../assets/elements/key.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

// Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 32,
        color: 'black',
        textAlign: 'center',
        borderBottomWidth: 3,
        borderBottomColor: colors.primary,
    },
    readOnly: {},
    inputContainer: {},
    input: {
        textAlign: 'center',
    },
    passwordContainer: {},
    yourPassword: {
        fontSize: 20,
    },
    passwordPreview: {
        fontSize: 30,
    },
    button: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: colors.secondary,
        borderTopWidth: 3.4,
        borderRightWidth: 3.4,
        borderBottomWidth: 3.4,
        borderLeftWidth: 3.4,
    },
    image: {
        width: 60,
        height: 60
    },
})

export default Main