import { Header, Hero } from "@/components";
import { API_REQUEST } from "@/services/api.service";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ITrendingMovie } from "@/interfaces/app.interface";
import { useEffect } from "react";

export default function Home({ trending }: HomeProps): JSX.Element {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Home - Movies</title>
        <meta name="description" content="Your favourite movie app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Hero trending={trending} />
        <section></section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const trending = await fetch(API_REQUEST.trending).then((res) => res.json());

  return {
    props: {
      trending: trending.results,
    },
  };
};

interface HomeProps {
  trending: ITrendingMovie[];
}
