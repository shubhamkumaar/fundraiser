
'use server'

import { signIn, signOut } from "@/auth";
export async function doSocialLogin() {
    const res = await signIn('google', { redirectTo: "/" });
    console.log(res);
    
}

export async function doLogout() {
  try{
    await signOut({ redirectTo: "/" });
    return true;
  }catch(e){
    console.log(e);
  }
return false
}