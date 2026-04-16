import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { criarAluno } from "./services/alunoService";

export default function Add() {
  const [nome, setNome] = useState("");
  const router = useRouter();

  const salvar = async () => {
    if (!nome) {
      Alert.alert("Erro", "Nome obrigatório");
      return;
    }

    try {
      await criarAluno({
        nome,
        checkpoints: [],
        media: 0
      });

      Alert.alert("Sucesso", "Aluno cadastrado");
      router.back();
    } catch {
      Alert.alert("Erro", "Erro ao cadastrar");
    }
  };

  return (
    <View>
      <TextInput placeholder="Nome" onChangeText={setNome} />
      <Button title="Criar" onPress={salvar} />
    </View>
  );
}
