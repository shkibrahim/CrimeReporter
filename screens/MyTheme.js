import { View, Text, ImageBackground } from 'react-native'

const MyTheme = ({ children }) => {
    return (
      <View style={{
        dark: false,
       colors:{
        primary: 'rgb (255,45,85)',
        background: 'rgb (242,242,242)',
        card: 'rgb (242,242,242)',
        text: 'rgb (242,242,242)',
        border: 'rgb (242,242,242)',
        notification:'rgb (242,242,242)',
        
       }
      }}>
    
          {children}
        </View>
      
    );
  }
export default MyTheme;
