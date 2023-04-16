import { View, Text, ImageBackground } from 'react-native'

const Back3 = ({ children }) => {
    return (
      <View>
        
        <ImageBackground source={require("../images/back3.jpg")} style={{height:'100%'}}/>
        <View style={{ position: "absolute" }}>
          {children}
        </View>
      </View>
    );
  }
export default Back3;
