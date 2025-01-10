// src/components/ErrorNotification.js
import React from 'react';

const styles = {
    container: {
      backgroundColor: '#f44336',
      color: 'white',
      padding: '10px 20px',
      position: 'fixed',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '300px',
    },
    message: {
      marginRight: '10px',
    },
    closeButton: {
      backgroundColor: 'white',
      color: '#f44336',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
    }
  };

const ErrorNotification = ( { message, onClose } ) => {
  return (
    <div style={styles.container}>
      <div style={styles.message}>{message}</div>
      <button style={styles.closeButton} onClick={onClose}>Close</button>
    </div>
  );
};

export default ErrorNotification;
