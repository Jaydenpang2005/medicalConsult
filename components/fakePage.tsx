import React from 'react';  
import { 
    ScrollView,
    View ,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground 

} from 'react-native';


const FakePage = () => {

    return (
        <View style={{height:'100%', width: '100%', backgroundColor:'white'}}>

            <Image source={require('../assets/images/fake7.png')} style={{ width: '100%', height: 670 }} />

        </View>


    )



};


export default FakePage;