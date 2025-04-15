import { useEffect, useState } from "react";
import { Meme } from "@/types";
import Cookies from "js-cookie";

export const useMemes = (initialData: Meme[]) => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const stored = Cookies.get("memes");
    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      setMemes(initialData);
      Cookies.set("memes", JSON.stringify(initialData), { expires: 30 });
    }
  }, []);

  const updateMeme = (updated: Meme) => {
    const updatedMemes = memes.map((m) => (m.id === updated.id ? updated : m));
    setMemes(updatedMemes);
    Cookies.set("memes", JSON.stringify(updatedMemes), { expires: 30 });
  };

  return { memes, updateMeme };
};
