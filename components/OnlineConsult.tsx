import React from 'react';  
import { 
    ScrollView,
    View ,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground 

} from 'react-native';

type AppProps = {
    img: string;
    name: string;
    title: string;
};


const OnlineConsult = ({img, name, title}: AppProps) => {

    name = '张医生';
    title = '儿科';

    return (
        <View style={{height:'22%', width: '100%', flexDirection: 'row'}}>

            <ImageBackground  source={require('../assets/images/explore/doctorImg.png')} style={{ width: 50, height: 50, borderRadius:100 }} />
            <View>
                
                <Text>{name}</Text>
                <Text>{title}</Text>

                <Text>请描述您的疾病或症状，是否用药，需要我提供什么样的帮助。</Text>
                

            </View>

        </View>


    )



};


export default OnlineConsult;