'use client';

import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="p-10 bg-black min-h-screen ">
      <div>
        <h1 className="text-3xl font-bold text-white mb-8">
          Shopping List App
        </h1>
        {user ? (
          <div className=" text-white font-bold">
            <p>Welcome! {user.displayName}</p>
            <p>{user.email}</p>
            <img src={user.photoURL} className="w-10 h-10 " />
            <Link
              href="/week-10/shopping-list"
              className="block mb-4 text-blue-500 hover:underline"
            >
              ➡️Click to Shopping List
            </Link>
            <button
              type="button"
              className="text-lg bg-white text-black rounded px-4 py-2"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="mt-8">
            <button
              type="button"
              className="text-lg bg-white text-black rounded px-4 py-2"
              onClick={handleSignIn}
            >
              Sign In with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
