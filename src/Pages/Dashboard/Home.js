import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native'
import Header from '../../Components/Header'
import Categoria from '../../Components/Categorias'

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
            <Header/>
            <Categoria/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#FFF9F9'
    },
    textoTitulo: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})