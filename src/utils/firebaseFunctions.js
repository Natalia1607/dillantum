import {
  collection,
  doc,
  getDocs,
  orderBy, 
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../redux/services/firebase";

//Saving new item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "ad", `${Date.now()}`), data, {
    merge: true,
  });
};

// get all items
export const getAllAds = async () => {
  const items = await getDocs(
    query(collection(firestore, "ad"), orderBy("id"))
  );

  return items.docs.map((doc) => doc.data());
};
