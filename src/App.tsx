import React from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { ModalController } from './components/ModalController';
import { Button } from './components/Button';
import { showModal } from './store/modal';
import { ModalTypes } from './enum';

function App() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(showModal({ type: ModalTypes.AddItem, props: { name: "Test item" } }));
  }

  const handleRemove = () => {
    dispatch(showModal({ type: ModalTypes.ConfirmDelete }));
  }

  return (
    <div className="App">
      <div className="App__content">
        <div className="App__buttons">
          <Button onClick={handleAdd}>Add</Button>
          <Button onClick={handleRemove}>Remove</Button>
        </div>
      </div>
      <ModalController />
    </div>
  );
}

export default App;
