import { db } from "../firebase";

export const createTip = (newTip) => {
  newTip.inProgress = true;
  newTip.paymentTaken = false;

  db.collection("tips")
    .add(newTip)
    .then(() => {
      console.log("tip successfully created!");
    })
    .catch((error) => {
      console.log(error);
    });
};
