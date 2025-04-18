import React from 'react';

export default function SafetyWarning({ children }) {
  return (
    <div style={{
      border: '2px solid #e53935',
      background: '#ffebee',
      padding: '1rem',
      borderRadius: '8px',
      margin: '1rem 0',
    }}>
      <strong>⚠️ SAFETY WARNING:</strong> {children}
    </div>
  );
}
