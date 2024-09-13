const [newWord, setNewWord] = useState({ esp: '', eng: '', por: '' });
const [showModal, setShowModal] = useState(false);

const handleAdd = () => {
  setShowModal(true);
};

const handleSubmit = () => {
  dispatch({ type: 'ADD_WORD', payload: newWord });
  setShowModal(false);
};

return (
  <div>
    <button onClick={handleAdd}>Agregar Palabra</button>
    {showModal && (
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Español" onChange={(e) => setNewWord({ ...newWord, esp: e.target.value })} />
          <input type="text" placeholder="Inglés" onChange={(e) => setNewWord({ ...newWord, eng: e.target.value })} />
          <input type="text" placeholder="Portugués" onChange={(e) => setNewWord({ ...newWord, por: e.target.value })} />
          <button type="submit">Guardar</button>
        </form>
      </div>
    )}
  </div>
);
