import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const ref = collection(db, "alunos");

export const criarAluno = async (aluno: any) => {
  await addDoc(ref, aluno);
};

export const listarAlunos = async () => {
  const snapshot = await getDocs(ref);
  return snapshot.docs.map(d => ({  
    id: d.id,
    ...d.data()
  }));
};

export const deletarAluno = async (id: string) => {
  await deleteDoc(doc(db, "alunos", id));
};

export const atualizarAluno = async (id: string, dados: any) => {
  const refDoc = doc(db, "alunos", id);
  await updateDoc(refDoc, dados);
};