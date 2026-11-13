import { useEffect, useId, useRef } from 'react';
import './Modal.css';

export default function Modal({ open, onClose, title, children, labelledById }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const headingId = labelledById || titleId;

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    const node = dialogRef.current;
    node?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-root"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        tabIndex={-1}
        ref={dialogRef}
      >
        <header className="modal__header">
          <h2 id={headingId} className="modal__title">
            {title}
          </h2>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close exhibit details">
            ×
          </button>
        </header>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
