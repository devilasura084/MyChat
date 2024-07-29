import React, { SetStateAction } from 'react'
import {ColorResult, SwatchesPicker} from 'react-color'
interface ColorPickerprops{
    setbackgroundcolor:React.Dispatch<SetStateAction<string>>
}
const ColorSlector = ({setbackgroundcolor}:ColorPickerprops) => {
    const handdleChange=(color:ColorResult)=>{
        setbackgroundcolor(color.hex.replace('#',''));
    }
  return (
    <div
    style={{
            zIndex: 999,
            position:'fixed',
            left:420
        }}
    >
        <SwatchesPicker
    onChange={handdleChange}/>
    </div>
  )
}

export default ColorSlector