import { getNoteSummaries } from "@/lib/notes";

import Notes from "@/components/screens/Notes";

export const metadata = {
  title: "Заметки — Сергей Шпадырев",
  description: "Короткие заметки и наблюдения Сергея Шпадырева.",
};

export default async function NotesPage() {
  const notes = await getNoteSummaries();
  return <Notes notes={notes} />;
}
