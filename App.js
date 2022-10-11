import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Pressable, Linking, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            email: ''
        }
    }

    RegDataInDB = () => {
        const { first_name } = this.state;
        const { email } = this.state;

        fetch('https://apiss.zio.mx/apicitas_api/cdos/submit_user_info.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ //convert data to JSON
                name: first_name,
                email: email
            })

        }).then((response) => response.json())
            .then((response) => {
                alert(response[0].Message);
            })

        /*.then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson[0].Message);
                /*if (Response[0].Message == "Registered successfuly!") {
                    //this.props.navigation.navigate("HomePage");
                }
            })*/.catch((error) => {
                console.error("ERROR:" + error);
            })


    }


    render() {
        return (
            <View style={styles1.AppStyle} >
                <View style={styles1.TextInView}>
                    <TextInput
                        placeholder="Enter First Nameee"
                        style={styles1.textInput}
                        onChangeText={first_name => this.setState({ first_name })}
                    />
                </View>


                <View style={styles1.TextInView}>
                    <TextInput
                        placeholder="Enter Email"
                        style={styles1.textInput}
                        onChangeText={email => this.setState({ email })}
                    />
                </View>


                <View style={styles1.ButtonView}>
                    <Pressable
                        style={styles1.Button}
                        onPress={this.RegDataInDB}
                    >
                        <Text style={styles1.text}>Register</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
}

//style section
const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    buttonContainer: {
        margin: 20
    },

    multiButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    stretch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 700,
        height: 200,
        margin: 10,
        resizeMode: 'stretch',
    },

    stretch1: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    stretch2: {
        width: 400,
        height: 160,
        margin: 10,
        resizeMode: 'stretch',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    AppBar1: {
        //flex: 1,
        //appen: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //textcolor: 'red',
        //alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        //color: 'red', 
        //fontSize: 26 ,
    },

    AppBar2: {
        //flex: 1,
        margin: 5,
        padding: 1,
        alignItems: 'center',
        //fontWeights: 'bold',
        justifyContent: 'center',
        fontSize: 15,
        //backgroundColor: 'pink',
        width: 300,
        height: 20,
    },

    text: {
        color: 'white',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
    },

    textInput: {
        flex: 1,
        marginBottom: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        height: 30,
        fontSize: 20,
    },

    AppBar3: {
        //flex: 1,
        margin: 5,
        padding: 1,
        alignItems: 'center',
        //fontWeights: 'bold',
        justifyContent: 'center',
        fontSize: 15,
        //backgroundColor: 'pink',
        width: 300,
        height: 20,
    },

    Iconn: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    AppStyle: {
        flex: 1,
        padding: 20,
        marginTop: 6,
        paddingBottom: 3,
        width: '100%'

    },

    TextInView: {
        flexDirection: 'row',
        marginTop: 6,
        paddingBottom: 3,
        width: '95%',
        padding: 2,
    },

    ButtonView: {
        marginTop: 48,
        alignItems: 'center'
    },

    Button: {
        color: 'white',
        backgroundColor: 'green',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginTop: -5
    },

})