// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  let linkStyles = "underline hover:text-green-500 font-bold";

  return (
    <main className="min-h-screen bg-pink-100 text-pink-500">
      <h1 className="text-3xl font-bold p-6 ">
        💕 CPRG 306: Web Development 2 - Assignments 💕
      </h1>
      <ul style={{ fontSize: "20px", paddingTop: "20px", paddingLeft: "50px" }}>
        <li>
          <Link href="./week-2" className={linkStyles}>
            ☑️ Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-3" className={linkStyles}>
            ☑️ Week 3 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
