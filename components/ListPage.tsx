"use client";

import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { useMemes } from "../hooks/useMemes";
import { Meme } from "@/types";

export default function ListPage({ initialMemes }: { initialMemes: Meme[] }) {
  const { memes } = useMemes(initialMemes);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 p-4">
      {memes.map((meme) => (
        <Card key={meme.id}>
          <Image width={200} height={120} src={meme.image} alt={meme.title} />
          <h3 className="text-lg font-bold">{meme.title}</h3>
          <p>{meme.likes} likes</p>
          <a
            href={meme.image}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            View Image
          </a>
        </Card>
      ))}
    </div>
  );
}
