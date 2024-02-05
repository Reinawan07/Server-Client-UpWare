export default function Register() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <form>
                    <div className="relative flex flex-col m-6 space-y-8 bg-base-200 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                        <div className="flex flex-col justify-center p-8 md:p-14">
                            <span className="mb-3 text-4xl font-bold">Register</span>
                            <span className="font-light text-bg-body-secondary mb-5">
                                Welcome to <b>UpWare</b>
                            </span>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-4 md:mb-5">
                                    <span className="mb-2 text-md">Name</span>
                                    <input
                                        className="w-full p-2 rounded-md border"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <span className="mb-2 text-md">Username</span>
                                    <input
                                        className="w-full p-2 rounded-md border"
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <span className="mb-2 text-md">Email</span>
                                    <input
                                        className="w-full p-2 rounded-md border"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <span className="mb-2 text-md">Password</span>
                                    <input
                                        className="w-full p-2 rounded-md border"
                                        type="text"
                                        id="password"
                                        name="password"
                                        placeholder="password"
                                    />
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                className="font-bold w-full bg-primary-content mt-4 text-bg-body-secondary p-2 rounded-lg mb-6 hover:bg-info"
                            >
                                Register
                            </button>

                            <div className="text-center text-bg-body-secondary ">
                                Have account?
                                <a href="#" className="font-bold mx-2 text-bg-body-secondary hover:text-info">Login</a>
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