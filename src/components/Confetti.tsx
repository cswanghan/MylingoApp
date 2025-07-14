import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  size: number;
  color: string;
}

export const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const colors = ['#58CC02', '#FFCE00', '#FF4B4B', '#3498db', '#9b59b6'];

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setPieces(newPieces);

    const timer = setTimeout(() => setPieces([]), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute animate-confetti-rain"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
          }}
        />
      ))}
    </div>
  );
};