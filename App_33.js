import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Platform, ActivityIndicator } from 'react-native';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            loading: false,
            disabled: false
        }
    } saveData = async (setState) => {

        try {
            let res = await fetch('https://apiss.zio.mx/apicitas_api/submit_user_info.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                }),
            });
            res = await res.json();
            console.log(res)
            this.setState({
                loading: false,
                disabled: false
            });
            Alert.alert('onPress', res.json);
        } catch (e) {
            console.error(e);
            this.setState({
                loading: false,
                disabled: false,
            });
        }

        /* this.setState({
            loading: true,
            disabled: true
        }, () => {

            




            /*let response = await fetch('https://apiss.zio.mx/apicitas_api/submit_user_info.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                }),
            });

                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.IsSuccess) {
                        alert(responseJson);
                        this.setState({
                            loading: false,
                            disabled: false
                        });
                    } else {
                        console.log(responseJson.ErrorMessage);
                        alert(responseJson.ErrorMessage)
                    }

                }).catch((error) => {
                    alert(error);
                    this.setState({
                        loading: false,
                        disabled: false
                    });
                });*/
        //});
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput underlineColorAndroid="transparent" placeholder="Your First Name" style={styles.textInput} onChangeText={(text) => this.setState({ name: text })} />
                <TextInput underlineColorAndroid="transparent" placeholder="Your Last Name" style={styles.textInput} onChangeText={(text) => this.setState({ email: text })} />
                <TouchableOpacity
                    disabled={this.state.disabled}
                    activeOpacity={0.8}
                    style={styles.Btn}
                    onPress={this.saveData}
                >
                    <Text style={styles.btnText}>Insert</Text>
                </TouchableOpacity>
                {(this.state.loading) ? (<ActivityIndicator size="large" />) : null}

                <StatusBar style="auto" />
            </View>
        );
    }
} const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingHorizontal: 25,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 8,
        fontSize: 16
    },
    Btn: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignSelf: 'stretch',
        padding: 10,
        marginTop: 10,
        marginBottom: 25
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
});