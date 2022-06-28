import axiosClient from "./apiClient";

export async function getAllDishes() {
  const response = await axiosClient.get("/books");
  return response;
}

export async function addDish(data) {
  const response = await axiosClient.post("/books", JSON.stringify(data));
  return response;
}
