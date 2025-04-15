import { Meme } from "@/types";
import defaultMemesData from "@/data/memes.json";
import ListPage from "@/components/ListPage";

export default function List() {
  const initialMemes: Meme[] = defaultMemesData.map((meme: Meme) => ({
    ...meme,
    likes: Math.floor(Math.random() * 100),
  }));

  return <ListPage initialMemes={initialMemes} />;
}
