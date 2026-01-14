const Cell = ({
  
  cell_height, cell_width, xCord, yCord, onHover ,value,onChange}) => {
  return (
    <div
      style={{
        height: cell_height,
        width: cell_width,
        border: '1px solid #d0d0d0',       // light gray border
        boxSizing: 'border-box',            // ensures border doesn’t break sizing
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
        cursor: 'pointer'
      }}
      onMouseEnter={() => onHover(xCord, yCord)}
      className="cell"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`${xCord},${yCord}`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          textAlign: 'center',
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
};

export default Cell;
