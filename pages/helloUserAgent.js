/* eslint-disable react/prop-types */
import Head from "next/head"

export default function HelloUserAgent({ userAgent = "Nobody" }) {
  return (
    <>
      <Head>
        <title>Hello User Agent!</title>
      </Head>
      <p>
        {" "}
        Hi <em>{userAgent}</em> !{" "}
      </p>
    </>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      userAgent: req.headers["user-agent"],
    },
  }
}
