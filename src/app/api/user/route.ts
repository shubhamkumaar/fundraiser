import { User } from "@/models/user-model";
import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
connect();

// export async function GET(req: NextRequest, res: NextResponse) {
//     const reqUrl = new URL(req.url);
//     console.log(reqUrl.searchParams.get("email"));
    
//   const user = await User.findOne({
//     email: new URL(req.url).searchParams.get("email") as string,
//   });
//   if (!user) {
//     return NextResponse.json({ message: "User not found", status: 404 });
//   }
//   return NextResponse.json(user);
// }

export async function POST(req: NextRequest){
  try {
    const { name, email, profilePic } = await req.json();
    if (!name || !email) {
      return NextResponse.json({
        message: "Name and Email are required",
        status: 400,
      });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json({user:existingUser, message: "User already exists", status: 400 });
    }

    const user = new User({ name, email, profilePic });
    const referalCode = Math.random().toString(36).substring(2, 8);
    user.referalCode = referalCode;
    // console.log(user);

    await user.save();
    return NextResponse.json(user);
  } catch (e: any) {
    return NextResponse.json({ message: e.message, status: 500 });
  }
}
