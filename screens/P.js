import { View, Text, ImageBackground } from 'react-native'

const P = ({ children }) => {
    return (
      <View>
        
        <ImageBackground source={require("../images/p.png")} style={{height:'100%'}}/>
        <View style={{ position: "absolute" }}>
          {children}
        </View>
      </View>
    );
  }
export default P;
