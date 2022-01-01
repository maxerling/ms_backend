import { db } from "../../index";
export async function getRoutines() {
  return db.collection("routines").get();
}

export async function getRoutine(id: string) {
  return db.collection("routines").doc(id).get();
}

export async function createRoutine(routine: Routine) {
  return db.collection("routines").doc().set(routine);
}

export async function deleteRoutine(id: string) {
  return db.collection("routines").doc(id).delete();
}

export async function updateRoutine(id: string, updatedRoutine: Routine) {
  return db.collection("routines").doc(id).update(updatedRoutine);
}
