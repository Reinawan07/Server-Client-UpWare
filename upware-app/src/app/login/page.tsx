export default function Login() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <form>
                    <div className="relative flex flex-col m-6 space-y-8 bg-base-200 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                        <div className="flex flex-col justify-center p-8 md:p-14">
                            <span className="mb-3 text-4xl font-bold">Login</span>
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
                                />
                            </div>
                            <div className="py-4">
                                <span className="mb-2 text-md">Password</span>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full p-2 rounded-md border"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-base-300 mt-4 text-bg-body-secondary p-2 rounded-lg mb-6 hover:bg-base-200"
                            >
                                Login
                            </button>

                            <div className="text-center text-bg-body-secondary ">
                                Don't have an account?
                                <a href='/register' className="font-bold mx-2 text-bg-body-secondary hover:text-base-300">Sign up</a>
                            </div>
                            <div className="text-center justify-content-center  text-bg-body-secondary ">
                                <p>OR</p>
                                <div id="google-login"></div>
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
        </>
    );
}