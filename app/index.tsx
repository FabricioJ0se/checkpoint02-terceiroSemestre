import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, FlatList, Text, View } from "react-native";
import { deletarAluno, listarAlunos } from "./services/alunoService";

export default function Home() {
  const [alunos, setAlunos] = useState<any[]>([]);
  const router = useRouter();

  const carregar = async () => {
    try {
      const data = await listarAlunos();
      setAlunos(data);
    } catch (error) {
      console.log("Erro ao carregar alunos:", error);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const confirmarExclusao = (id: string) => {
    console.log("ID para excluir:", id);

    Alert.alert(
      "Confirmação",
      "Deseja remover o aluno?",
      [
        { text: "Não", style: "cancel" },
        {
          text: "Sim",
          style: "destructive",
          onPress: async () => {
            try {
              await deletarAluno(id);
              console.log("Aluno deletado com sucesso");
              carregar(); 
            } catch (error) {
              console.log("Erro ao deletar:", error);
              Alert.alert("Erro", "Não foi possível excluir");
            }
          }
        }
      ]
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Cadastrar" onPress={() => router.push("/add")} />

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <Text>
              {item.nome} - Média: {item.media}
            </Text>

            <Button
              title="CheckPoints"
              onPress={() => router.push(`/checkpoints?id=${item.id}`)}
            />

            <Button
              title="Excluir"
              onPress={() => confirmarExclusao(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}
