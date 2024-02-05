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
                                className="w-full bg-primary-content mt-4 text-bg-body-secondary p-2 rounded-lg mb-6 hover:bg-info"
                            >
                               <b>Login</b> 
                            </button>

                            <div className="text-center text-bg-body-secondary ">
                                Don't have an account?
                                <a href='/register' className="font-bold mx-2 text-bg-body-secondary hover:text-info">Register</a>
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