"use client";

import { useState } from "react";
import { useMemes } from "../hooks/useMemes";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableColumn,
} from "@heroui/table";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { EditModal } from "../../components/EditModal";
import { Meme } from "@/types";

export default function TablePage() {
  const { memes, updateMeme } = useMemes();
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  const columns = [
    { key: "id", label: "Id" },
    { key: "image", label: "Image" },
    { key: "name", label: "Title" },
    { key: "likes", label: "Likes" },
    { key: "actions", label: "Actions" },
  ];

  return (
    <div>
      <Table>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>
                <Image width={400} height={100} src={meme.image}></Image>
              </TableCell>
              <TableCell>{meme.title}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button onPress={() => setSelectedMeme(meme)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedMeme && (
        <EditModal
          meme={selectedMeme}
          onClose={() => setSelectedMeme(null)}
          onSave={updateMeme}
        />
      )}
    </div>
  );
}
