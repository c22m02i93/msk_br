"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Search() {
  const [query, setQuery] = useState("");

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted">
        <SearchIcon className="h-4 w-4" />
        Поиск
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Поиск по сайту</DialogTitle>
          <DialogDescription>Введите запрос и нажмите кнопку.</DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3">
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Что ищем?" />
          <Button type="submit">Найти</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
