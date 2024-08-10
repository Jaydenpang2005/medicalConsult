import React from 'react';  
import { 
    ScrollView,
    View ,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground 

} from 'react-native';


const MainBanner = () => {

    return (
        <View style={{height:'60%'}}>

            <ImageBackground  source={require('../assets/images/index/mainBannerBackground.png')} style={{ width: '100%', height: 600, borderRadius:100 }} />
            <Text style={{position:'absolute', top: '2%', left: '5%', color: 'black', fontSize: 20, fontWeight: 'bold'}}>健康生活</Text>
            <Text style={{position:'absolute', top: '20%', left: '5%', color: 'grey', fontSize: 50}}>宫腹腔镜</Text>
            <Text style={{position:'absolute', top: '22.5%', left: '60%', color: 'white', fontSize: 20, backgroundColor: '#FF6600', borderRadius: 10, padding: 5}}>临床技术联盟</Text>

            <View style={{position:'absolute', top: '40%', left: '0%', width: '100%', alignItems: 'center' }}>

                <Text>专业名医为您坐诊</Text>

            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 200 }}>

                {/* doctors */}

            </ScrollView>
            <TouchableOpacity style={{alignItems:'center', position:'absolute', bottom:'0%', left:'10%', backgroundColor:'white', borderRadius:10, padding:10, width:300, height:40, justifyContent:'center' }}>
                <Text>进入主题</Text>
            </TouchableOpacity>

        </View>


    )



};


export default MainBanner;