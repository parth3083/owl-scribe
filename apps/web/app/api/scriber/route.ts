import { NextRequest, NextResponse } from "next/server";
import { smartResponse } from "../../../utils/smartResponse";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, mode, modeType } = body.data || {};
    if (!text || !modeType  ) {
      return NextResponse.json(
        { message: "Both 'text' and 'modeType' are required." },
        { status: 400 }
      );
    }

    const result = await smartResponse(text,  modeType,mode); 

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("SmartResponse API Route Error:", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
