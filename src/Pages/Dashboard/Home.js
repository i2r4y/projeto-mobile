import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
} from 'react-native'
import Header from '../../Components/Header'
import Categoria from '../../Components/Categorias'
import ProdutosDestaque from '../../Components/ProdutosDestaque'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header />
                <Categoria />
                <ProdutosDestaque />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#FFF9F9'
    }
})