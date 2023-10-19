import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const CLIENT_ID = String(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID);
  const REDIRECT_URI = String(process.env.NEXT_PUBLIC_REDIRECT_URL);
  const AUTH_ENDPOINT = String(process.env.NEXT_PUBLIC_AUTH_ENDPOINT);
  const RESPONSE_TYPE = String(process.env.NEXT_PUBLIC_RESPONSE_TYPE);
  return (
    <div className="h-full">
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between ">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image"
          />
        </div>

        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form>
            <section className="h-screen bg-inherit flex items-center justify-center">
              <div className="  rounded-lg p-8 shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Str3am Login</h2>
                <Link
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                >
                  <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg p-2 w-full mb-4 hover:bg-green-600">
                    <Image
                      src="/spotify.svg"
                      alt="spotify"
                      width={25}
                      height={25}
                    />
                    <span>Login with Spotify</span>
                  </button>
                </Link>

                <button className="flex items-center space-x-2 bg-red-500 text-white rounded-lg p-2 w-full hover:bg-red-600">
                  <Image
                    src="/google.svg"
                    alt="spotify"
                    width={25}
                    height={25}
                  />
                  <span>Login with Google</span>
                </button>

                <div className="text-center text-gray-600 my-4">Or</div>

                <form>
                  <div className="mb-4 ">
                    <label className="block text-gray-600 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-900"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-600 font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      className="text-gray-900 w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                      placeholder="Your password"
                    />
                  </div>

                  <div className="mb-6 flex items-center">
                    <input type="checkbox" className="mr-2" id="rememberMe" />
                    <label htmlFor="rememberMe" className="text-gray-600">
                      Remember me
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
                  >
                    Login
                  </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/signup">
                    <p className="text-blue-500">Register</p>
                  </Link>
                </p>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
