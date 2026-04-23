import { useEffect, useState } from "react";
import { API } from "../services/api";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";

export default function Dashboard() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: "", content: "" });

    const fetchNotes = async () => {
        const res = await API.get("/notes");
        setNotes(res.data.data);
    };

    const createNote = async () => {
        await API.post("/notes", newNote);
        setNewNote({ title: "", content: "" });
        fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <>
            <Navbar />

            <div className="container">
                <h2>Add Note</h2>

                <input
                    placeholder="Title"
                    value={newNote.title}
                    onChange={(e) =>
                        setNewNote({ ...newNote, title: e.target.value })
                    }
                />

                <input
                    placeholder="Content"
                    value={newNote.content}
                    onChange={(e) =>
                        setNewNote({ ...newNote, content: e.target.value })
                    }
                />

                <button onClick={createNote}>Add Note</button>
            </div>

            <div>
                {notes.map((note) => (
                    <NoteCard
                        key={note._id}
                        note={note}
                        refresh={fetchNotes}
                    />
                ))}
            </div>
        </>
    );
}