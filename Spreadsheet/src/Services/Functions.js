export const addRow = (setMatrix,count = 500) => {
    setMatrix((prev) => {
      const cols = prev[0].length;
      const newRows = Array.from({ length: count }, () =>
        Array(cols).fill(null)
      );
      return [...prev, ...newRows];
    });
  };


export const addCol = (setMatrix,count = 500) => {
    setMatrix((prev) =>
      prev.map((row) => [...row, ...Array(count).fill(null)])
    );
  };
  

 