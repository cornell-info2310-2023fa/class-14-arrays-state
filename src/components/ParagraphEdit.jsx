import { useState } from 'react';

import './ParagraphEdit.css';

export default function ParagraphEdit({ children, edit = false }) {
  const [content, setContent] = useState(children);
  const [editMode, setEditMode] = useState(edit);

  function handleSaveText() {
    setEditMode(false);
  }

  function handleEditText() {
    setEditMode(true);
  }

  let componentContent;
  if (editMode) {
    componentContent = (
      <>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={5} />
        <button onClick={handleSaveText}>Save</button>
        <button onClick={() => setEditMode(false)}>Save (arrow function)</button>
      </>
    )
  } else {
    componentContent = (
      <>
        <p onClick={handleEditText}>{content}</p>
        <button onClick={handleEditText}>Edit</button>
        <button onClick={() => setEditMode(true)}>Edit (arrow function)</button>
      </>
    )
  }

  return componentContent;
}
