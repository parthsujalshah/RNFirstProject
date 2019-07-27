import React, { Component } from 'react';
import {  View, Button, StyleSheet, TextInput} from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ""
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };  
    
    placeSubmitHandler = () => {
        if(this.state.placeName.trim() === ""){
            return;
        }
        
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={{width: 300}}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    placeholder="Enter the Place"
                    style={styles.placeInput}
                />
    
                <Button 
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    
    placeInput: {
        width: "70%"
    },
    
    placeButton: {
        width: "30%"
    }    
});

export default PlaceInput;