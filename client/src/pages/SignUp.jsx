import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-sky-600 to-blue-500 text-slate-50 rounded-lg ">
              Zain's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-semibold">
            You can Sign Up using your Email and Password.<br/>
            Or With Google
          </p>
        </div>
        {/* Right */}
        
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username"/>
              <TextInput type="text" placeholder="Username" id="Username"/>
            </div>
            <div className="">
              <Label value="Your Email"/>
              <TextInput type="text" placeholder="Email" id="email"/>
            </div>
            <div className="">
              <Label value="Your Password"/>
              <TextInput type="text" placeholder="Password" id="password"/>
            </div>
            <Button gradientDuoTone="greenToBlue" type="submit"> 
              Sign Up 
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already Have An Account?</span>
            <Link to='/sign-in' className="text-sky-700 font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
