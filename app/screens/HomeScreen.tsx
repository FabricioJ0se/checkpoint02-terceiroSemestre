import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { deletarAluno, listarAlunos } from "../services/alunoService";

export default function HomeScreen({ navigation }: any) {
  const [alunos, setAlunos] = useState<any[]>([]);

  const carregar = async () => {
    const data = await listarAlunos();
    setAlunos(data);
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View>
      <Button title="Adicionar Aluno" onPress={() => navigation.navigate("Add")} />

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome} - Média: {item.media}</Text>
            <Button title="Excluir" onPress={() => deletarAluno(item.id).then(carregar)} />
          </View>
        )}
      />
    </View>
  );
}
