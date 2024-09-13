const [deleteWord, setDeleteWord] = useState('');

const handleDeleteSubmit = () => {
  dispatch({ type: 'DELETE_WORD', payload: deleteWord });
  setDeleteWord('');
};

return (
  <div>
    <button onClick={() => setShowDeleteModal(true)}>Eliminar Palabra</button>
    {showDeleteModal && (
      <div className="modal">
        <input type="text" placeholder="Palabra en español" onChange={(e) => setDeleteWord(e.target.value)} />
        <button onClick={handleDeleteSubmit}>Eliminar</button>
      </div>
    )}
  </div>
);
