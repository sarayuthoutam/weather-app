import { useState } from 'react';

interface CityModalProps {
  onClose: () => void;
  onCitySubmit: (city: string) => void;
}

const CityModal: React.FC<CityModalProps> = ({ onClose, onCitySubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    if (city.trim()) {
      onCitySubmit(city);
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Enter City</h2>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoFocus
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <style jsx>{`
        .modal {
          display: block;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
          padding-top: 60px;
        }
        .modal-content {
          background-color: #fefefe;
          margin: 5% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
        input {
          width: 100%;
          padding: 12px;
          margin: 8px 0;
          box-sizing: border-box;
        }
        button {
          background-color: #4CAF50;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default CityModal;


