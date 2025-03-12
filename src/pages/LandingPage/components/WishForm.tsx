import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { notification } from "@/constants/notification";
import React, { useState } from "react";
import { toast } from "sonner";
import axios from 'axios';


const WishForm = ({ fetchData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SHEET_BEST_URL = import.meta.env.VITE_SHEET_BEST_URL;

    try {

      const response = await axios.post(SHEET_BEST_URL, {
        name,
        email,
        content,
      });

      

      if (response.status === 200) {
        toast.success("Gửi lời chúc thành công");
        setName("");
        setEmail("");
        setContent("");
        fetchData();
      } else {
        toast.error("Gửi lời chúc thất bại");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(notification.MESSAGE_ERROR);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Input
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default WishForm;
