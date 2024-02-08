import Link from "next/link";
import RootLayout from "../layout";
import { redirect } from "next/navigation";
import ClientFlashComponent from "@/components/ClientFlashComponent";

type MyResponse = {
    message: string;
    accessToken?: string;
}

export default function Login() {
    const handleLogin = async (FormData: FormData) => {
        'use server';
        const email = FormData.get("email");
        const password = FormData.get("password");

        const response = await fetch("http://localhost:3000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })

        const result: MyResponse = await response.json();

        if (!response.ok) {
            return redirect("/login?error=" + result.message);
        }

        return redirect("/products");

    }

    return (
        <>
            {/* <RootLayout showNavbar={false} showFooter={false}> */}
            <div className="flex items-center justify-center min-h-screen">
                <form action={handleLogin}>
                    <div className="relative flex flex-col m-6 space-y-8 bg-base-200 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                        <div className="flex flex-col justify-center p-8 md:p-14">
                            <span className="mb-3 text-4xl font-bold">Login</span>
                            <ClientFlashComponent />
                            <span className="font-light text-bg-body-secondary">
                                Welcome to <b>UpWare</b>
                            </span>
                            <div className="py-4">
                                <span className="mb-2 text-md">Email</span>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded-md border"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="py-4">
                                <span className="mb-2 text-md">Password</span>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full p-2 rounded-md border"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-4 bg-primary p-2 rounded-lg mb-6 hover:bg-secondary"
                            >
                                <b>Login</b>
                            </button>

                            <div className="text-center text-bg-body-secondary ">
                                Don't have an account?
                                <Link href='/register' className="font-bold mx-2 text-bg-primary hover:text-secondary">Register</Link>
                            </div>
                        </div>

                        <div className="relative bg-base-300 rounded-md">
                            <img
                                src="https://awsimages.detik.net.id/community/media/visual/2023/04/12/tupperware.jpeg?w=600&q=90"
                                alt="img"
                                className="w-[420px] h-full hidden rounded-r-2xl md:block object-cover"
                            />
                        </div>

                    </div>
                </form>
            </div>
            {/* </RootLayout> */}
        </>
    );
}