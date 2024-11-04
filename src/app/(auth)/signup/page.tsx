import { Metadata } from "next";
import signUpImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";
import GoogleSignUpButton from "./GoogleSignUpButton";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to Social Net</h1>
            <p className="text-muted-foreground">
              A place to where <span className="italic">you</span> can connect
              with your friends
            </p>
          </div>
          <div className="space-y-5">
          <GoogleSignUpButton/>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted" />
              <span>OR</span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <SignUpForm /> 
            <Link href="/login" className="block text-center hover:underline">Already have an account? Login</Link>
          </div>
        </div>
        <Image
          src={signUpImage}
          alt="Sign up image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
