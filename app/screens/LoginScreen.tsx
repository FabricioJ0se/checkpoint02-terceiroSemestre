import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { auth } from "../services/firebaseConfig";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
