
// Importing Native components for proper functioning of the app
import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

// Importing custom components to better configure the app (styling and back-end)
import Header from '../components/Header'
import { generatePassword } from '../components/generatePassword'

// Beginning the configuration of the Main screen
const Main = ({ navigation }) => {

    // Main body of the Main screen, will allow the user to generate a password
    function Body() {

        // Defining variables which will be sent to the "generatePassword" component, to generate the password, depending on the amount of digits, letters and symbols
        const [digitCount, setDigitCount] = useState(4)
        const [lowerCaseCount, setLowerCaseCount] = useState(0)
        const [upperCaseCount, setUpperCaseCount] = useState(0)
        const [symbolCount, setSymbolCount] = useState(0)
        const [generatedPassword, setGeneratedPassword] = useState('Su4S&nh4')

        // Will display 4 inputs, one for each type of character
        return (
            <>
                <TextInput
                    style={{ textAlign: 'center' }}
                    keyboardType="numeric"
                    placeholder="Números"
                    onChangeText={(value) => {
                        setDigitCount(parseInt(value));
                    }}
                />
                <TextInput
                    style={{ textAlign: 'center' }}
                    keyboardType="numeric"
                    placeholder="Minúsculas"
                    onChangeText={(value) => {
                        setLowerCaseCount(parseInt(value));
                    }}
                />
                <TextInput
                    style={{ textAlign: 'center' }}
                    keyboardType="numeric"
                    placeholder="Maiúsculas"
                    onChangeText={(value) => {
                        setUpperCaseCount(parseInt(value));
                    }}
                />
                <TextInput
                    style={{ textAlign: 'center' }}
                    keyboardType="numeric"
                    placeholder="Símbolos"
                    onChangeText={(value) => {
                        setSymbolCount(parseInt(value));
                    }}
                />
                {/* A button, that will actually send the information to the generator and back */}
                <Button
                    onPress={() => {
                        setGeneratedPassword(
                            generatePassword(
                                lowerCaseCount,
                                upperCaseCount,
                                symbolCount,
                                digitCount
                            )
                        );
                    }}
                    title="Gerar Senha"
                />
                {/* Will then display the password generated to the user */}
                <Text>Sua senha: {generatedPassword}</Text>
                {/* Save button which will go to a confirmation saving screen and pass user information and the password */}
                <Button
                    onPress={() => { navigation.navigate('SavePW', { newPassword: generatedPassword, id: generatedPassword }) }}
                    title="Salvar Senha"
                />
            </>
        )
    }

    // The Main screen will render a container with a title, the footer (with navigating capabilities) and a Body, which is better explained above
    return (
        <View style={styles.container}>
            <Header title="Gerar Nova Senha" />
            <Body navigation={navigation} />
        </View>
    );
}

// Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
})

export default Main