import { API } from "../services/api";

export default function NoteCard({ note, refresh }) {
    const deleteNote = async () => {
        await API.delete(`/notes/${note._id}`);
        refresh();
    };

    return (
        <div className="note">
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <button onClick={deleteNote}>Delete</button>
        </div>
    );
}