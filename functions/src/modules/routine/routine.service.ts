import { HttpsError } from "firebase-functions/v1/https";
import * as routineRepo from "./routine.repository";

export async function getRoutines() {
  const routineArray: Routine[] = [];
  const routinesCollection = await routineRepo.getRoutines();
  routinesCollection.forEach((doc) => {
    const routine = { id: doc.id, ...doc.data() } as Routine;
    routineArray.push(routine);
  });
  return routineArray;
}

export async function getRoutine(id: string) {
  const routineDoc = await findRoutine(id);
  return { id: routineDoc.id, ...routineDoc.data() };
}

export async function createRoutine(routine: Routine) {
  return routineRepo.createRoutine(routine);
}

export async function deleteRoutine(id: string) {
  const routineDoc = await findRoutine(id);
  return routineRepo.deleteRoutine(routineDoc.id);
}

export async function updateRoutine(newRoutineInfo: Routine) {
  if (newRoutineInfo.id === undefined) {
    throw new HttpsError("invalid-argument", "invalid id");
  }
  const routineDoc = await findRoutine(newRoutineInfo.id);
  const updatedRoutine = {
    id: routineDoc.id,
    ...routineDoc.data(),
    ...newRoutineInfo,
  };
  return routineRepo.updateRoutine(updatedRoutine.id, updatedRoutine);
}

async function findRoutine(
  id: string
): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>> {
  const routine = await routineRepo.getRoutine(id);
  if (!routine.exists) {
    throw new HttpsError("not-found", "routine not found");
  }

  return routine;
}
