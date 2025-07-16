
import { View, Text, StyleSheet, Image } from "react-native";

export default function Categoria (){
    return (
        <View style={styles.Container}>
            <Text style={styles.Letras}>
                Categorias em Destaque 
            </Text>
            <View style={styles.ContainerFiltro}>
                <View style={styles.Categoria}>
                    <Image source={require("../../assets/cat-roupa.png")}/>
                    <Text style={styles.Texto}>Roupas</Text>
                </View>

                <View style={styles.Categoria}>
                    <Image source={require("../../assets/cat-roupa.png")}/>
                    <Text style={styles.Texto}>Pelúcias</Text>
                </View>

                <View style={styles.Categoria}>
                    <Image source={require("../../assets/cat-roupa.png")}/>
                    <Text style={styles.Texto}>Acessórios</Text>
                </View>

                <View style={styles.Categoria}>
                    <Image source={require("../../assets/cat-roupa.png")}/>
                    <Text style={styles.Texto}>Papelaria</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({

    Container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop:5,
    },
    Letras:{
        fontSize:26,
        fontFamily:'Poppins_400Regular',
        color:'#AF4F5B',
    },
    ContainerFiltro:{
        flex:1,
        flexDirection:'row',
        gap:20,
        justifyContent:'center',
        paddingTop:10,
    },
    Categoria:{
        flex:1,
        alignItems:'center',
        
    },
    Texto:{
         fontSize:14,
        fontFamily:'Poppins_400Regular',
        color:'#AF4F5B',

    }

})