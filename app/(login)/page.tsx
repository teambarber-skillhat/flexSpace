import Link from 'next/link';

export default function Login() {
  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <div className="bg-white w-full max-w-md space-y-8 rounded-lg p-8 shadow-md">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="text-gray-700 block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-gray-700 block text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white hover:bg-indigo-700 mt-4 w-full rounded-md py-2"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
