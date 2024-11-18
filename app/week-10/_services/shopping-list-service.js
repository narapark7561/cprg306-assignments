import { db } from '../_utils/firebase';
import { collection, getDocs, addDoc, query } from 'firebase/firestore';

export async function getItems(userId) {
  try {
    const itemsCollectionRef = collection(db, 'users', userId, 'items');
    const querySnapshot = await getDocs(itemsCollectionRef);
    let items = [];

    querySnapshot.forEach((docSnap) => {
      let item = {
        id: docSnap.id,
        ...docSnap.data(),
      };
      items.push(item);
    });
    return items;
  } catch (error) {
    console.log(error);
  }
}

export async function addItem(userId, item) {
  try {
    const itemsCollectionRef = collection(db, 'users', userId, 'items');

    const docRef = await addDoc(itemsCollectionRef, item);

    return docRef.id;
  } catch (error) {
    console.log(error);
  }
}
