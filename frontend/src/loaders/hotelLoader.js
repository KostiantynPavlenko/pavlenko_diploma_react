const API_URL = "http://localhost:3000";

export async function hotelLoader({ params }) {
  try {
    const res = await fetch(`${API_URL}/hotels/${params.id}`);

    if(!res.ok) {
      throw new Error("Cannot get hotel!");
    }

    return res.json();
  } catch (error) {
    return error.message;
  }
  
}