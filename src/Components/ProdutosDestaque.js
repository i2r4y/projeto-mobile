import Database from "../Data/Produtos";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";

export default function ProdutosDestaque() {
    const database = Database
    console.log(database)
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.Letras}>Produtos em Destaque</Text>

            <FlatList
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={styles.container1}
                data={database}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                            <View style={[styles.containerProdutos]}>
                                <View style={styles.containerImage}>
                                    <Image source={item.imagem} />
                                </View>
                                <View >
                                    <Text style={styles.texto}>{item.nome}</Text>
                                    <Text style={styles.preco}>R$ {item.preco}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text></Text>
                                </TouchableOpacity>
                            </View>
                    )
                }}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 5,

    },
    Letras: {
        fontSize: 26,
        fontFamily: 'Poppins_400Regular',
        color: '#AF4F5B',
    },
    containerImage: {
        backgroundColor: "#FFEFF1",
        alignItems: "center",
        borderRadius: 20

    },

    // container1: {
    //     flexDirection: "row",
    //     gap: 5
    // },

    containerProdutos: {
        width: "40%",
        flexDirection: "column",
        gap: 5,
    },

    texto: {
        color: "#433E3D",
        fontFamily: 'Poppins_500Medium',
    },
    preco: {
        color: "#433E3D",
        fontFamily: 'Poppins_600SemiBold',
    },

})