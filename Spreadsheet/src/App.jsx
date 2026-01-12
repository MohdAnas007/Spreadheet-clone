import React, { useEffect, useState } from 'react';
import Cell from './components/cell';
import {rows,cols,cell_width,cell_height} from './Services/variables'
import {addCol,addRow} from './Services/Functions'
function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [matrix, setMatrix] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(null))
  );
  const handleHover = (x, y) => {
    setPos({ x, y });
  };
  const thresholdX = matrix.length - 50;
  const thresholdY = matrix[0].length - 50;
  useEffect(() => {
    if (pos.x >= thresholdX) addRow(setMatrix);
    if (pos.y >= thresholdY) addCol(setMatrix);
    // console.log(matrix.length, matrix[0].length);
  }, [pos,matrix]);

  return (
    <div
      style={{
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', 
      }}
    >

      <div
        style={{
          display: 'flex',
          backgroundColor: '#f1f3f4',
          padding: '8px 16px',
          borderBottom: '1px solid #ccc',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          fontWeight: 500,
          gap: '20px',
        }}
      >
        <span>
          Currently hovered: ({pos.x}, {pos.y})
        </span>
      </div>


      <div
        style={{
          flex: 1, // take remaining height
          overflow: 'auto', // scroll only grid
        }}
      >
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((col, colIndex) => (
              <div key={colIndex}>
                <Cell
                  cell_height={cell_height}
                  cell_width={cell_width}
                  xCord={rowIndex}
                  yCord={colIndex}
                  onHover={handleHover}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
