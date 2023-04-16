import { View, Text, ImageBackground } from 'react-native'

const Background2 = ({ children }) => {
    return (
      <View>
        <ImageBackground source={require("../images/back2.jpg")} style={{height:'100%'}}/>
        <View style={{ position: "absolute" }}>
          {children}
        </View>
      </View>
    );
  }
export default Background2;
