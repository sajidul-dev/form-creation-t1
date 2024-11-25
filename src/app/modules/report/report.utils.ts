import axios from "axios";

export const getAllData = async () => {
  const reponse = await axios
    .get(
      "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json"
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return reponse;
};
