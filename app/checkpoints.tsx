import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { atualizarAluno } from "./services/alunoService";
import { calcularMedia } from "./utils/calculo";

export default function Checkpoints() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [cp1, setCp1] = useState("");
  const [cp2, setCp2] = useState("");
  const [cp3, setCp3] = useState("");

  const notas = [Number(cp1), Number(cp2), Number(cp3)];
  const media = calcularMedia(notas);

  const salvar = async () => {
    await atualizarAluno(id as string, {
      checkpoints: notas,
      media
    });

    router.back();
  };

  return (
    <View>
      <TextInput placeholder="Digite CP1" onChangeText={setCp1} />
      <TextInput placeholder="Digite CP2" onChangeText={setCp2} />
      <TextInput placeholder="Digite CP3" onChangeText={setCp3} />

      <Text>Média: {media}</Text>

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
