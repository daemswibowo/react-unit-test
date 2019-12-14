import React from 'react';

const BelajarTesting = ({nilai1, nilai2}) => {
  const hitung = (a, b) => {
    if (!a || !b) {
      return null;
    }
    return a + b;
  }

  return (
    <div>
      {hitung(nilai1, nilai2)}
    </div>
  );
}

export default BelajarTesting;
