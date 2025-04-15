"use client";

import { useEffect, useState } from "react";
import { Meme } from "../types/index";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

interface Props {
  meme: Meme;
  onClose: () => void;
  onSave: (meme: Meme) => void;
}

export const EditModal = ({ meme, onClose, onSave }: Props) => {
  const [title, setTitle] = useState(meme.title);
  const [image, setImage] = useState(meme.image);
  const [likes, setLikes] = useState(meme.likes);

  useEffect(() => {
    setTitle(meme.title);
    setImage(meme.image);
    setLikes(meme.likes);
  }, [meme]);

  const handleSave = () => {
    if (title.length < 3 || title.length > 100 || likes < 0 || likes > 99) {
      alert("Invalid input!");
      return;
    }
    onSave({ ...meme, title, image, likes });
    onClose();
  };

  return (
    <Modal
      isOpen={true}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <ModalContent>
        <ModalHeader>Edit Meme</ModalHeader>
        <ModalBody>
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Input
            label="Likes"
            type="number"
            value={likes.toString()}
            onChange={(e) => setLikes(Number(e.target.value))}
          />
        </ModalBody>
        <ModalFooter>
          <Button onPress={onClose}>Cancel</Button>
          <Button onPress={handleSave}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
