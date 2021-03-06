import { HttpsError } from "firebase-functions/v1/https";
import * as userRepo from "./user.repository";
export async function createUser(uid: string) {
  const user: User = { id: uid, routineId: "" };
  return userRepo.createUser(user);
}
export async function getUsers() {
  const usersCollection = await userRepo.getUsers();
  const userArray: User[] = [];
  usersCollection.forEach((doc) => {
    const user: User = { id: doc.id, ...doc.data() };
    userArray.push(user);
  });
  return userArray;
}

export async function getUser(uid: string) {
  const user = await findUser(uid);
  return { id: user.id, ...user.data() };
}

export async function updateUser(id: string, newUserInfo: User) {
  if (id === undefined) {
    throw new HttpsError("invalid-argument", "invalid id");
  }
  const user = await findUser(id);
  const updatedUser = { id: user.id, ...user.data(), ...newUserInfo };
  await userRepo.updateUser(updatedUser.id, updatedUser);
  return `user: ${updatedUser.id}, updated`;
}
export async function deleteUser(uid: string) {
  const user = await findUser(uid);
  userRepo.deleteUser(user.id);
  return "user deleted";
}

async function findUser(
  uid: string
): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>> {
  const user = await userRepo.getUser(uid);
  if (!user.exists) {
    throw new HttpsError("not-found", "user not found");
  }

  return user;
}
