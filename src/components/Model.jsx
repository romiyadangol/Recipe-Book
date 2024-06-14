import '../assets/components/model.css';

export default function Model({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="model-overlay">
      <div className="model-content">
        <button className="model-close" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
}
