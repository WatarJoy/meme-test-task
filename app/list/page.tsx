import { GetStaticProps } from "next";
import { Meme } from "@/types";
import defaultMemesData from "../../data/memes.json";
import dynamic from "next/dynamic";

const ListPage = dynamic(() => import("../../components/ListPage"), {
  ssr: false,
});

export const getStaticProps: GetStaticProps = async () => {
  const memes: Meme[] = defaultMemesData.map((meme: Meme) => ({
    ...meme,
    likes: Math.floor(Math.random() * 100),
  }));

  return {
    props: {
      initialMemes: memes,
    },
  };
};

export default function List({ initialMemes }: { initialMemes: Meme[] }) {
  return <ListPage initialMemes={initialMemes} />;
}
