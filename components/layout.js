import Head from "next/head";
import s from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Quiz App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>{children}</main>
    </>
  );
}
