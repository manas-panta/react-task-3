import React, { useState } from 'react';

function Picker(props) {
    const [displayColors, setDisplayColors] = useState(false);
    const [bgColor, setBgColor] = useState("pink")

    const handleClick = () => {
        setDisplayColors(true);        
    }

    const handleColor = (color) => {
        setBgColor(color);
        setDisplayColors(false);
    }

    return (
        <div className='container pt-4'>
            <h2 className='text-center fw-bolder'>Color Picker</h2>
            <div style={{ backgroundColor: bgColor }} className='display m-auto d-flex flex-column align-items-center justify-content-center mb-5'>
                <div className='d-flex flex-wrap justify-content-center color-bar'>
                    {displayColors && props.colors.map((color, index) => (
                        <div
                            key={index}
                            className='color-box'
                            style={{ backgroundColor: color }}
                            onClick={() => { handleColor(color) }}
                        ></div>
                    ))}
                </div>
                <button className='btn btn-success button' onClick={handleClick}>Pick a color</button>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <Picker colors={['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'brown', 'gray', 'black', 'white', 'violet', 'indigo', 'teal', 'magenta', 'olive', 'maroon', 'navy', 'lime', 'fuchsia', 'aqua', 'silver', 'gold']} />
        </div>
    );
}

export default App;