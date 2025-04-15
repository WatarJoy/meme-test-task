import { Meme } from "@/types";
import defaultMemesData from "@/data/memes.json";
import TablePage from "@/components/TablePage";

export default function Table() {
  const initialMemes: Meme[] = defaultMemesData.map((meme: Meme) => ({
    ...meme,
    likes: Math.floor(Math.random() * 100),
  }));

  return <TablePage initialMemes={initialMemes} />;
}
