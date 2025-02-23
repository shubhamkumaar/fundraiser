import {Transaction} from "@/models/transaction-model"
import { NextResponse ,NextRequest} from "next/server";
export async function GET(req: NextRequest){
    try {
        const { searchParams } = new URL(req.url);
        const referralCode = searchParams.get("referral");
        const res = await Transaction.find({
            referralCode:referralCode
        });
        return NextResponse.json({transactions:res, status:200});
    } catch (error:any) {
        console.log(error);
        return NextResponse.json({message: error.message, status: 500});
        
    }
}