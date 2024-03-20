import axios from "axios";
import { NextResponse } from "next/server";
 
export async function GET(req: Request) {
  try {
    const res = await axios.get('http://127.0.0.1:3200/api/movies') 

    if (!res.data) {
      return NextResponse.json({ error: "Didn't reach", status: 401 });
    }


    return NextResponse.json(res.data);
  } catch (error) {
    console.log("ERROR GETTING TASKS: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}