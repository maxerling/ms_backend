
import { db } from "../../index";

export async function createUser(user: User) {
  await db.collection("users").doc().set(user);
  return "user added";
}

export async function getUser(uid: string) {
  return db.collection("users").doc(uid).get();
}

export async function getUsers() {
  return db.collection("users").get();
}

export async function updateUser(uid: string, updatedUser: User) {
  return db.collection("users").doc(uid).update(updatedUser);
}

export async function deleteUser(uid: string) {
  return await db.collection("users").doc(uid).delete();
}
