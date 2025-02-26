import { View, Image,Text } from 'react-native';
import { Img } from '../../src/Utils/Imagepath';
const HomeScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Image
          source={Img.Home}
          style={{ width: 50, height: 50 }} />
  
    </View>



  );
  export default HomeScreen
