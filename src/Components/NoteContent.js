import React from 'react'
import editnotes from '../Assets/editnotes.svg'  
import deletenotes from '../Assets/deletenotes.svg'

function NoteContent({id,title,content,note,handleEditNote,handleDeleteNote}) {
  return (
    <div className='note-des'>
    <div className='notes-header'>
     <div className='notes-title'>{title}</div>
     <div className='notes-icons'>
      <button type='button' className='icon-button' onClick={() => handleEditNote(note)}>
        <img alt="edit-notes" src={editnotes}></img></button>
      <button type='button' className='icon-button' onClick={() => handleDeleteNote(id)}>
        <img alt="delete-notes" src={deletenotes}></img></button>
      </div>
    </div>
    <div className='notes-content'>
      {content}
    </div>
    <div className='notes-days'>
    {new Date().toString}
    </div>
   </div>   
  )
}

export default NoteContent