import React from "react";
import { View,StyleSheet } from "react-native";
import HeadeLogin from "../Header";

export default function Login(){
    return(
    <>
    <HeadeLogin />
    <View style={styles.container}>

    </View> 
    </>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0f6efd'

    }
})

