import React, { useEffect, useState,useRef } from 'react';
import Cell from './components/cell';
import {rows,cols,cell_width,cell_height} from './Services/variables'
import {addCol,addRow} from './Services/Functions'
function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [matrix, setMatrix] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(null))
  );


  //////////// virtuaolization method 
  const containerRef=useRef(null);

  const [scroll,setScroll] = useState({top:0,left:0});
  const handleScroll=()=>{
    const el=containerRef.current;
    setScroll({
      top:el.scrollTop,
      left:el.scrollLeft,
    })
  };
  









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


  // virtualization calculation
    const viewPortHeight=window.innerHeight-60;
    const viewPortWidth=window.innerWidth;
    const startRow=Math.floor(scroll.top/cell_height);
    const endRow=Math.min(matrix.length,startRow+Math.ceil(viewPortHeight/cell_height)+5);

    const startCol=Math.floor(scroll.left/cell_width);
    const endCol=Math.min(matrix[0].length,startCol+Math.ceil(viewPortWidth/cell_width)+5);

    const visibleRows=matrix.slice(startRow,endRow);





  

  return (
   <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* top bar */}
      <div style={{
        background: '#f1f3f4',
        padding: '8px 16px',
        borderBottom: '1px solid #ccc'
      }}>
        Hovered: ({pos.x}, {pos.y})
      </div>

      {/* scroll container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          flex: 1,
          overflow: 'auto',
          position: 'relative'
        }}
      >
        {/* full size spacer */}
        <div
          style={{
            height: matrix.length * cell_height,
            width: matrix[0].length * cell_width,
            position: 'relative'
          }}
        >
          {/* visible window */}
          <div
            style={{
              position: 'absolute',
              top: startRow * cell_height,
              left: startCol * cell_width
            }}
          >
            {visibleRows.map((row, rowIndex) => (
              <div key={startRow + rowIndex} style={{ display: 'flex' }}>
                {row.slice(startCol, endCol).map((_, colIndex) => (
                  <Cell
                    key={startCol + colIndex}
                    cell_height={cell_height}
                    cell_width={cell_width}
                    xCord={startRow + rowIndex}
                    yCord={startCol + colIndex}
                    onHover={handleHover}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

