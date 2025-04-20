import { NextRequest, NextResponse } from "next/server";
import { smartResponse } from "../../../utils/smartResponse";

export async function POST(request: NextRequest) {
  try {
    const { text, mode, modeType } = await request.json();

    if (!text || !mode) {
      return NextResponse.json(
        { message: "Both 'text' and 'mode' are required." },
        { status: 400 }
      );
    }

    const result = await smartResponse(text, mode, modeType); 

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("SmartResponse API Route Error:", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
