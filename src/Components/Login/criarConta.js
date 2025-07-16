import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
export default function CriarConta() {
  const navegacao = useNavigation()

  async function Login() {
    navegacao.navigate("Login")

  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS==="android" ? "padding" :"height"} style={styles.CriarConta}>
      <StatusBar backgroundColor="#ffdadb" />
      <View style={styles.Image}>
        <Image
          style={styles.Logo}
          source={require("../../../assets/logo.png")}
        />
        <Image
          style={styles.Perfil}
          source={require("../../../assets/perfil.png")}
        />
        <View style={styles.Textos}>
          <TextInput
            style={styles.TextInput}
            placeholder="Nome de Usuario"
            placeholderTextColor="#000"
          />

          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="#000"
          />

          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#000"
          />

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaotexto}>Criar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.click}>
        <Text>Já tem uma conta?</Text>
        <TouchableOpacity onPress={Login}>
          <Text>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  CriarConta: {
    flex: 1,
    backgroundColor: "#ffdadb",

  },
  Image: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    gap: 20,
  },
  Logo: {
    width: 220,
    height: 90,
  },
  Perfil: {
    width: 110,
    height: 110,
  },
  Textos: {
    marginTop: 40,
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    backgroundColor: "#FFEFF1",
    width: 330,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: 15,
    borderRadius: 30,
    fontFamily: "Poppins_400Regular",
    fontSize: 18
  },
  botao: {
    alignItems: "center",
    backgroundColor: "#E07988",
    width: 210,
    borderRadius: 30
  },
  botaotexto: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Poppins_400Regular",
    paddingVertical: 5
  },
  click: {
    flex: 1,
    flexDirection: "row",
    gap: 3,
    justifyContent: 'center',
    marginTop:20
  }
});
