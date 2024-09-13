import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Dictionary = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    // Lógica para agregar palabra
  };

  const handleDelete = () => {
    // Lógica para eliminar palabra
  };

  const handleTranslate = () => {
    // Lógica para traducir palabra
  };

  return (
    <div>
      <button onClick={handleAdd}>Agregar Palabra</button>
      <button onClick={handleDelete}>Eliminar Palabra</button>
      <button onClick={handleTranslate}>Traducir Palabra</button>
    </div>
  );
};

export default Dictionary;
