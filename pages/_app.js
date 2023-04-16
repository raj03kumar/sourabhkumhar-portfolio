import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const metaData = {
    viewport:
      "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
    title: "Sourabh Kumhar | Portfolio",
    description:
      "I'm a skilled Frontend Web Developer with experience in JavaScript and expertise in frameworks/library like Next.js, React.js, Tailwind, Bootstap and MUI Bootstrap. I'm a quick learner and collaborate closely with clients to create efficientm scalable, and user-friendly solutions that solve real-world problems. Let;s work together to bring your ideas to life!",
    icon: "/favicon.svg",
    author: "Sourabh Kumhar",
    tags: "frontend developer, developer portfolio, next.js, react.js, tailwind css, node.js, mongodb, three.js, react-three",
  };

  return (
    <>
      <Head>
        <meta name="viewport" content={metaData.viewport} />
        <title>{metaData.title}</title>
        <link rel="icon" href={metaData.icon} />
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
