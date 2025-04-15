import { GetStaticProps } from "next";
import { Meme } from "@/types";
import defaultMemesData from "../../data/memes.json";
import dynamic from "next/dynamic";

const TablePage = dynamic(() => import("../../components/TablePage"), {
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

export default function Table({ initialMemes }: { initialMemes: Meme[] }) {
  return <TablePage initialMemes={initialMemes} />;
}
