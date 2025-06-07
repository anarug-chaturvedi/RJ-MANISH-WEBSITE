"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    setIsLoading(true);
    setError(null);
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("/api/auth/register", formData);
      router.push("/login");
    } catch (err) {
      toast.error(err);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return router.push("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  required
                  onChange={handleValueChange}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={handleValueChange}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleValueChange}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <LogIn />{" "}
                  {isLoading ? (
                    <span className="ml-3">Signing Up ...</span>
                  ) : (
                    <span className="ml-3">Sign Up</span>
                  )}
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to the
                  <span
                    onClick={() => router.push("/terms-and-conditions")}
                    className=" cursor-pointer border-b border-gray-500 border-dotted"
                  >
                    Terms of Service{" "}
                  </span>
                  and its{" "}
                  <span
                    onClick={() => router.push("/privacy-policy")}
                    className=" cursor-pointer border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy{" "}
                  </span>
                </p>
                <p className="mt-2">
                  Already Have an account ?{" "}
                  <Link href={"/login"} className="text-blue-500 underline">
                    Login Now
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
