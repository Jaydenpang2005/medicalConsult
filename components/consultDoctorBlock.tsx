import React from 'react';  
import { 
    ScrollView,
    View ,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground 

} from 'react-native';


const ConsultDoctorBlock = () => {

    return (
        <View style={{height:'22%', width: '100%', flexDirection: 'row'}}>

            <ImageBackground  source={require('../assets/images/explore/doctorImg.png')} style={{ width: 50, height: 50, borderRadius:100 }} />
            <View>
                
                <Text>XX</Text>
                <Text>副主任医生</Text>

                <Text>线上咨询：100 | 线下预约挂号：30</Text>
                <TouchableOpacity style={{backgroundColor:'green', borderRadius:10, padding:10, width:100, alignItems:'center'}}>
                    <Text>线上咨询</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'blue', borderRadius:10, padding:10, width:100, alignItems:'center'}}>
                    <Text>线下预约咨询</Text>
                </TouchableOpacity>
                

            </View>

        </View>


    )



};


export default ConsultDoctorBlock;