import React, { useState, useContext, useEffect } from "react";
import { NotesContext } from "../Context/Notecontext";
import format from "../Assets/format.svg";
import formatcolor from "../Assets/formatcolor.svg";
import formatleft from "../Assets/formatleft.svg";
import formatsize from "../Assets/formatsize.svg";
import formattext from "../Assets/formattext.svg";
import undo from "../Assets/undo.svg";
import redo from "../Assets/redo.svg";
import description from "../Assets/description.svg";
import mynotes from "../Assets/mynotes.svg";
import NoteContent from "./NoteContent";

function Notes() {
  const { notes, addNote, updateNote, deleteNote } = useContext(NotesContext);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [ setErrorMessage] = useState("");

  const clearData = () => {
    setNewNote('');
  }

  useEffect(() => {

  }, [newNote.title, newNote.content]);

  const handleAddNote = () => {
    if (newNote.title.trim() === "" || newNote.content.trim() === "") {
      setErrorMessage("Both title and content are required.");
    } else {
      // Clear any previous error message
      if (editingNoteId !== null) {
        updateNote({ ...newNote, id: editingNoteId });
        setEditingNoteId(null);
      } else {
        addNote({ ...newNote, id: Date.now() });
      }

      setNewNote({ title: "", content: "" });
    }
  };

  const handleEditNote = (note) => {
    setNewNote(note);
    setEditingNoteId(note.id);
  };

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
    if (editingNoteId === noteId) {
      // Reset editing state if the currently edited note is deleted
      setEditingNoteId(null);
      setNewNote({ title: "", content: "" });
    }
  };

  return (
    <>

<div className='add-note-task-container'>
        <div className='add-note-task'>
          Add a Note
          <button className='add-note-task-quit' onClick={clearData}>X</button>
        </div>
        <div className='add-note-task-title'>
        <textarea value={newNote.title} maxLength={20} onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} className='add-note-task-title-column' placeholder='Title'></textarea>
        </div>
        <div className='add-note-task-input'>
         <textarea value = {newNote.content} maxLength={100} onChange = {(e) => setNewNote({ ...newNote, content: e.target.value })} className='add-note-task-input-box' placeholder='Take a note...'></textarea>
        </div>
        
        <div className='add-note-task-formatting-icons'>
        <button className='icon-button add'type='button' onClick={handleAddNote}>
          <img className='icon-button' src={mynotes} alt=""></img></button>
        <img className='icon-button'  src={formatsize} alt=""></img>
        <img className='icon-button' src={formatcolor} alt=""></img>
        <img className="icon-button" src={format} alt=""></img>
        <img className="icon-button" src={formattext} alt=""></img>
        <img className="icon-button" src={formatleft} alt=""></img>
        <img className="icon-button" src={undo} alt=""></img>
        <img className="icon-button" src={redo} alt=""></img>
        </div> 
      </div>

      <div className='notes-home'>
          <div><img src={description} alt=""></img>My Notes</div>
          <div className='recent'>Recently viewed</div>
          {notes.length === 0 ? (
          <div className="empty-notes-message"></div>
        ) : (
          <div className='notes-list'>
          {
                notes.map((note) => (
                    <NoteContent 
                    id = {note.id} title = {note.title}
                     content = {note.content} note = {note} handleEditNote = {handleEditNote} 
                     handleDeleteNote={handleDeleteNote}>
                    </NoteContent>
                ) )
            }
          </div>
        )}

        </div>
    </>
  );
}

export default Notes;
