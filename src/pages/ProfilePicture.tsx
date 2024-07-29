import { useState } from 'react'
import Loading from '../components/Loading';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import ColorSelectorpoper from '../components/ColorSelectorpoper';
import {ColorResult, CirclePicker} from 'react-color'
type ProfilePictureProps = {
    delay: number;
  };
  type eyebrowvarianttype="variant01" | "variant02" | "variant03" | "variant04" | "variant05" | "variant06" | "variant07" | "variant08" | "variant09" | "variant10" | "variant11" | "variant12" | "variant13" | "variant14" | "variant15"
  type eyevarianttype="variant01"| "variant02"| "variant03"| "variant04"| "variant05"|
        "variant06"| "variant07"| "variant08"| "variant09"| "variant10"|
        "variant11"| "variant12"| "variant13"| "variant14"| "variant15"|"variant16"| "variant17"| "variant18"| "variant19"| "variant20"|"variant21"| "variant22"| "variant23"| "variant24"| "variant25"|
        "variant26"
    type hairtype="long01"|"long02"|"long03"|"long04"|"long05"|"long06"|"long07"|"long08"|"long09"|"long10"|"long11"|"long12"|"long13"|"long14"|"long15"|"long16"|"long17"|"long18"|"long19"|"long20"|"long21"|"long22"|"long23"|"long24"|"long25"|"long26"|"short01"|"short02"|"short03"|"short04"|"short05"|"short06"|"short07"|"short08"|"short09"|"short10"|"short11"|"short12"|"short13"|"short14"|"short15"|"short16"|"short17"|"short18"|"short19"
    type mouthtype="variant01"| "variant02"| "variant03"| "variant04"| "variant05"|
        "variant06"| "variant07"| "variant08"| "variant09"| "variant10"|
        "variant11"| "variant12"| "variant13"| "variant14"| "variant15"|"variant16"| "variant17"| "variant18"| "variant19"| "variant20"|"variant21"| "variant22"| "variant23"| "variant24"| "variant25"|
        "variant26"|"variant27"| "variant28"| "variant29"| "variant30"
    type earringtype="variant01"| "variant02"| "variant03"| "variant04"| "variant05"|
        "variant06"
    type featuretype="birthmark"|"blush"|"freckles"|"mustache"
    type glassestype="variant01"| "variant02"| "variant03"| "variant04"| "variant05"
const ProfilePicture = ({delay}:ProfilePictureProps) => {
    const eyebrowsliderVariants:eyebrowvarianttype[] = [
        "variant01", "variant02", "variant03", "variant04", "variant05",
        "variant06", "variant07", "variant08", "variant09", "variant10",
        "variant11", "variant12", "variant13", "variant14", "variant15"
      ];
    const eyeslidervariants:eyevarianttype[]=[
        "variant01", "variant02", "variant03", "variant04", "variant05",
        "variant06", "variant07", "variant08", "variant09", "variant10",
        "variant11", "variant12", "variant13", "variant14", "variant15","variant16", "variant17", "variant18", "variant19", "variant20","variant21", "variant22", "variant23", "variant24", "variant25",
        "variant26"
    ]
    const hairvariants:hairtype[]=[
        "long01","long02","long03","long04","long05","long06","long07","long08","long09","long10","long11","long12","long13","long14","long15","long16","long17","long18","long19","long20","long21","long22","long23","long24","long25","long26","short01","short02","short03","short04","short05","short06","short07","short08","short09","short10","short11","short12","short13","short14","short15","short16","short17","short18","short19"
    ]
    const mouthvariants:mouthtype[]=[
        "variant01", "variant02", "variant03", "variant04", "variant05",
        "variant06", "variant07", "variant08", "variant09", "variant10",
        "variant11", "variant12", "variant13", "variant14", "variant15","variant16", "variant17", "variant18", "variant19", "variant20","variant21", "variant22", "variant23", "variant24", "variant25",
        "variant26","variant27", "variant28", "variant29", "variant30"
    ]
    const earringvariants:earringtype[]=[
        "variant01", "variant02", "variant03", "variant04", "variant05",
        "variant06"
    ]
    const colors = [
        '#9e5622','#763900','#d2a37b', 
        '#b58c6d', 
        '#a16a4f','#ecad80','#f2d3b1','#e2b08c'
      ];
    const features:featuretype[]=[
        "birthmark","blush","freckles","mustache"
    ]
    const glasses:glassestype[]=[
        "variant01", "variant02", "variant03", "variant04", "variant05"
    ]
    const [loading, setLoading] = useState(true);
    const [flip,setflip]=useState<boolean>(false);
    const [backgroundcolor,setbackgroundcolor]=useState('ffffff')
    const [eyebrowvalueIndex, seteyebrowValueIndex] = useState(0);
    const [eyevalueindex,seteyevalueindex]=useState(0);
    const [hairindex,sethairindex]=useState(0);
    const [haircolour,sethaircolour]=useState('ffffff')
    const [mouthindex,setmouthindex]=useState(0);
    const [skincolour,setskincolour]=useState('b58c6d');
    const [earringtypeindex,setearringypeindex]=useState(0);
    const [earringprobability,setearringprobability]=useState(0);
    const [featureindex,setfeatureindex]=useState(0);
    const [featureprobability,setfeatureprobability]=useState(0);
    const [glassesindex,setglassesindex]=useState(0);
    const [glassesprobability,setglassesprobability]=useState(0);
  if(loading)
  {
    return (<Loading
    delay={delay}
    setLoading={setLoading}
    />)
  }
  const handleFlip=()=>{
    setflip(!flip);
  }
  const handleEyebrowchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seteyebrowValueIndex(parseInt(e.target.value, 10));
  };
  const handleEyechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    seteyevalueindex(parseInt(e.target.value,10))
  }
  const handlehairchange=(e:React.ChangeEvent<HTMLInputElement>)=>
  {
    sethairindex(parseInt(e.target.value,10))
  }
  const handlemouthchange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
      setmouthindex(parseInt(e.target.value,10))
    }
    const handleskincolourchange=(color:ColorResult)=>
    {
        setskincolour(color.hex.replace('#',''))
    }
    const randomize=()=>{
        const numberforbrows=Math.floor(Math.random()*1000);
        seteyebrowValueIndex(numberforbrows%14);
        const numberforeyes=Math.floor(Math.random()*1000);
        seteyevalueindex(numberforeyes%26)
        const numberforHair=Math.floor(Math.random()*1000);
        sethairindex(numberforHair%45);
        const numberforMouth=Math.floor(Math.random()*1000);
        setmouthindex(numberforMouth%30)
        const numberforearring=Math.floor(Math.random()*1000);
        setearringypeindex(numberforearring%6);
        const numberforearringprobability=Math.floor(Math.random()*1000);
        setearringprobability(numberforearringprobability%101)
        const numberforfeature=Math.floor(Math.random()*1000);
        setfeatureindex(numberforfeature%4);
        const numberforfeatureprobability=Math.floor(Math.random()*1000);
        setfeatureprobability(numberforfeatureprobability%101)
        const numberforglasses=Math.floor(Math.random()*1000);
        setglassesindex(numberforglasses%5);
        const numberforglassesprobability=Math.floor(Math.random()*1000);
        setglassesprobability(numberforglassesprobability%101);
        const numberforSkin=Math.floor(Math.random()*1000);
        setskincolour(colors[numberforSkin%8].replace('#',''))
        const backgroundhexColor = `${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
        setbackgroundcolor(backgroundhexColor)
        const hairhexColor = `${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
        sethaircolour(hairhexColor);
    }
  const avatar = createAvatar(adventurer, {
    randomizeIds: true,
    flip:flip,
    backgroundColor: [backgroundcolor],
    eyebrows:[eyebrowsliderVariants[eyebrowvalueIndex]],
    eyes:[eyeslidervariants[eyevalueindex]],
    hair:[hairvariants[hairindex]],
    hairColor:[haircolour],
    mouth:[mouthvariants[mouthindex]],
    skinColor:[skincolour],
    earrings:[earringvariants[earringtypeindex]],
    earringsProbability:earringprobability,
    features:[features[featureindex]],
    featuresProbability:featureprobability,
    glasses:[glasses[glassesindex]],
    glassesProbability: glassesprobability,
  });
  const svg = avatar.toDataUri();
  return (
    <div className='profile-pic'>
        <div className='profilepic-sidebar'>
            <div className='eachbutton onlyfirst'>
            <button className="button" onClick={handleFlip}>
              <span>Flip</span>
            </button>
            </div>
            <div className='eachbutton'>
                <ColorSelectorpoper
                name={'Background Colour'}
                setbackgroundcolor={setbackgroundcolor}
                />
            </div>
            <div style={{fontSize:"1.2rem"}} className='eachbutton'>
                Eye Brows
                <div style={{backgroundColor:'#ff7605',
                display:'flex',
                flexDirection:'column',
                padding:"1svw",
                borderRadius:"10px",
                outline:'auto',
                width:"85%"
                }}>
		        <input className='range' 
                type="range" 
                min={0}
                max={13}
                value={eyebrowvalueIndex}
                onChange={handleEyebrowchange}
                />
                </div>
            </div>
            <div style={{fontSize:"1.2rem"}} className='eachbutton'>
                Eye
                <div style={{backgroundColor:'#ff7605',
                display:'flex',
                flexDirection:'column',
                padding:"1svw",
                borderRadius:"10px",
                outline:'auto',
                width:"85%"
                }}>
		        <input className='range' 
                type="range" 
                min={0}
                max={25}
                value={eyevalueindex}
                onChange={handleEyechange}
                />
                </div>
            </div>
            <div style={{fontSize:"1.2rem"}} className='eachbutton'>
                Hair
                <div style={{backgroundColor:'#ff7605',
                display:'flex',
                flexDirection:'column',
                padding:"1svw",
                borderRadius:"10px",
                outline:'auto',
                width:"85%"
                }}>
		        <input className='range' 
                type="range" 
                min={0}
                max={hairvariants.length-1}
                value={hairindex}
                onChange={handlehairchange}
                />
                </div>
            </div>
            <div className='eachbutton'>
            <ColorSelectorpoper
            name={'Hair colour'}
            setbackgroundcolor={sethaircolour}
            />
            </div>
            <div>
            <div style={{fontSize:"1.2rem"}} className='eachbutton'>
                Mouth
                <div style={{backgroundColor:'#ff7605',
                display:'flex',
                flexDirection:'column',
                padding:"1svw",
                borderRadius:"10px",
                width:"85%",
                outline:'auto',
                }}>
		        <input className='range' 
                type="range" 
                min={0}
                max={29}
                value={mouthindex}
                onChange={handlemouthchange}
                />
                </div>
            </div>
            </div>
            <div>
            <div style={{fontSize:"1.2rem"}} className='eachbutton'>
                Skin Colour
                <CirclePicker
                onChange={handleskincolourchange}
                colors={colors}
                width='26svw'
                circleSize={35}
                />
            </div>
            </div>
            <div>
            <div className='eachbutton '>
            <button className="button" onClick={randomize}>
              <span>Randomize</span>
            </button>
            </div>
            </div>
        </div>
        <div
        style={{backgroundColor:`#${backgroundcolor}`}}
        className='editing-profilepic'>
        <img src={svg} alt="pp" />
        </div>
    </div>
  )
}

export default ProfilePicture