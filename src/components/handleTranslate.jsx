const [translateWord, setTranslateWord] = useState('');
const words = useSelector(state => state.words);

const handleTranslateSubmit = () => {
  const foundWord = words.find(word => word.esp === translateWord);
  if (foundWord) {
    alert(`Inglés: ${foundWord.eng}, Portugués: ${foundWord.por}`);
  } else {
    alert('Palabra no encontrada');
  }
};

return (
  <div>
    <button onClick={() => setShowTranslateModal(true)}>Traducir Palabra</button>
    {showTranslateModal && (
      <div className="modal">
        <input type="text" placeholder="Palabra en español" onChange={(e) => setTranslateWord(e.target.value)} />
        <button onClick={handleTranslateSubmit}>Traducir</button>
      </div>
    )}
  </div>
);
