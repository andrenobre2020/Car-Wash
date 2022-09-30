import React from "react";
import { View,StyleSheet,Text,Image ,TouchableOpacity} from "react-native";
import HeaderInicio from "../Header";
import * as Animatables from "react-native-animatable";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function InicioMiddle(){
    
    const navigation = useNavigation();

    function Login(){
        navigation.navigate('Login')
    }

    return(
        <>
        <HeaderInicio />
        <View style={styles.container}>
            
        <View style={{alignItems:'center'}}>
            <Image style={{width:320,height:320}} source={require('../../../Image/1.png')} />
        </View>

          
            <Animatables.View animation='fadeInLeft' delay={700} style={{alignItems:'center',marginTop:20,width:295}}>
            <Text style={{fontSize:32,color:'#fff',fontWeight:'700'}}>Lave seu Veiculo com poucos cliques !</Text>
            </Animatables.View>

            <Animatables.View animation='fadeInRight' delay={700} style={{marginTop:30,marginStart:20}}>
            <Text style={{fontSize:24,color:'#fff',fontWeight:'700',opacity:0.5}}>Nos Vamos até Você. </Text>
            </Animatables.View>


            <Animatables.View  animation='fadeInLeft' delay={1000} style={{alignItems:'center',marginTop:'15%'}}>
            <TouchableOpacity onPress={Login} style={{backgroundColor:'#d27721',width:290,borderRadius:25,padding:16,flexDirection:'row'}}>
                <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:18,marginStart:'35%',marginEnd:10}}>ENTRAR</Text>
                <AntDesign name="right" size={24} color="#fff" />
            </TouchableOpacity>
            </ Animatables.View>

            <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                <Image style={{width:'100%',height:120}} source={require('../../../Image/3.png')}/>
            </View>
    
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#106fff'
    },
    Fotos:{
        width:350,
        height:350
    }
})