import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RotasIndex from './src/Routes/index'
import  AutProvider  from './src/Components/Contexts/Contexts'
import {useFonts,Poppins_400Regular,Poppins_700Bold} from "@expo-google-fonts/poppins" 

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })
  if (!fontsLoaded) {
    return
  }
  return (
    <NavigationContainer>
      <AutProvider>
        <StatusBar backgroundColor='#000000' barStyle='dark-content' translucent={false} />
        <RotasIndex />
      </AutProvider>
    </NavigationContainer>

  )
}