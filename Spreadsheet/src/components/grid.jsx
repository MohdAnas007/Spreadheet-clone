import { useState } from "react";
import Cell from "./cell"
import './cell.css'

const Grid=()=>{
    const [grid,setGrid] =useState([
        ["#fff", "#fff", "#fff"],
        ["#fff", "#fff", "#fff"],
        ["#fff", "#fff", "#fff"],
    ]
    );
    const addrow = () => {
        
        const cols=grid[0].length;
        const newRow=Array(cols).fill("#fff");
        setGrid([...grid,newRow]);
        console.log(grid.length);
    }
    const addcol = () => {
        const newGrid=grid.map((row)=>[...row,"#fff"]);
        setGrid(newGrid);
        console.log(grid[0].length);

    }
    const deletecol=()=>{
        if(grid[0].length<=3)return ;

        const x=grid.map((row)=>row.slice(0,-1));
        setGrid(x);

    }

    const deleteRow=()=>{
       if(grid.length>3){
        const x=grid.slice(0,-1);
        setGrid(x);
       }

    }


    const [color,setColor]=useState("#ff0000");

    const updateColor=(rowIndex,colIndex)=>{

        const row=grid.length;
        const col=grid[0].length;
        let mat=[];
        for(let i=0;i<row;i++){
            const x=[];
            for(let j=0;j<col;j++){
                x.push(grid[i][j]);

            }
            mat.push(x);

        }
        
        mat[rowIndex][colIndex]=color;
        setGrid(mat);


    }



    return (

     <div>
        <header>
            <button onClick={addrow}>Add Row </button>
            <button onClick={addcol}>Add column </button>
            <button onClick={deletecol}>Delete Column</button>
            <button onClick={deleteRow}>Delete Row</button>
            <input type="color"
            value={color}
            onChange={(e)=>setColor(e.target.value)}
             />

        </header>
        <main className='grid-container'>

            {


                grid.map((row,rowIndex)=>
                    <div className="row" key={rowIndex}>

                        {
                            row.map((color,colIndex)=>
                                <Cell
                                  key={colIndex}
                                  colortoset={color}
                                  onClick={()=>updateColor(rowIndex,colIndex)}
                                
                                />
                            )
                        }
                    </div>
                )
            }

        </main>


     </div>
       


    )
}

export default Grid;
