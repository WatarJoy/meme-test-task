import { useEffect, useState } from "react";
import { Meme } from "@/types/index";
import defaultMemesData from "../../data/memes.json";

export const useMemes = () => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("memes");
    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      const defaultMemes: Meme[] = defaultMemesData.map((meme: Meme) => ({
        ...meme,
        likes: Math.floor(Math.random() * 100),
      }));
      setMemes(defaultMemes);
      localStorage.setItem("memes", JSON.stringify(defaultMemes));
    }
  }, []);

  const updateMeme = (updated: Meme) => {
    const updatedMemes = memes.map((m) => (m.id === updated.id ? updated : m));
    setMemes(updatedMemes);
    localStorage.setItem("memes", JSON.stringify(updatedMemes));
  };

  return { memes, updateMeme };
};
