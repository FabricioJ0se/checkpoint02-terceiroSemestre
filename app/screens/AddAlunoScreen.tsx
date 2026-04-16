import { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { criarAluno } from "../services/alunoService";
import { calcularMedia } from "../utils/calculo";

export default function AddAlunoScreen({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [notas, setNotas] = useState("");

  const handleSalvar = async () => {
    try {
      const notasArray = notas.split(",").map(n => Number(n));

      if (notasArray.some(n => isNaN(n))) {
        throw new Error("Notas inválidas");
      }

      const media = calcularMedia(notasArray);

      await criarAluno({
        nome,
        checkpoints: notasArray,
        media
      });

      navigation.goBack();
    } catch (err: any) {
      Alert.alert("Erro", err.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Nome" onChangeText={setNome} />
      <TextInput
        placeholder="Notas (ex: 7,8,9)"
        onChangeText={setNotas}
      />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}
