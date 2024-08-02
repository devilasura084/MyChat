import { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

import {ColorResult, CirclePicker} from 'react-color'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';
import ColorSlector from '@/components/ColorSlector';
import { Slider } from "@/components/ui/slider";
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
    const Navigate=useNavigate();
    const [loading, setLoading] = useState(true);
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
    useEffect(() => {
      if (!loading) {
        randomize();
      }
    }, [loading]);
    if(loading)
    {
      return (<Loading
      delay={delay}
      setLoading={setLoading}
      />)
    }
    
  const handleEyebrowchange = (value:number[]) => {
    seteyebrowValueIndex(value[0]);
  };
  const handleEyechange=(value:number[])=>{
    seteyevalueindex(value[0])
  }
  const handlehairchange=(value:number[])=>
  {
    sethairindex(value[0])
  }
  const handlemouthchange=(value:number[])=>
    {
      setmouthindex(value[0])
    }
    const handleskincolourchange=(color:ColorResult)=>
    {
        setskincolour(color.hex.replace('#',''))
    }
    const randomize = () => {
      seteyebrowValueIndex(Math.floor(Math.random() * 14));
      seteyevalueindex(Math.floor(Math.random() * 26));
      sethairindex(Math.floor(Math.random() * 45));
      setmouthindex(Math.floor(Math.random() * 30));
      setearringypeindex(Math.floor(Math.random() * 6));
      setearringprobability(Math.floor(Math.random() * 101));
      setfeatureindex(Math.floor(Math.random() * 4));
      setfeatureprobability(Math.floor(Math.random() * 101));
      setglassesindex(Math.floor(Math.random() * 5));
      setglassesprobability(Math.floor(Math.random() * 101));
      setskincolour(colors[Math.floor(Math.random() * 8)].replace('#', ''));
      setbackgroundcolor(Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'));
      sethaircolour(Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'));
    };
    
  const avatar = createAvatar(adventurer, {
    randomizeIds: true,
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
  const setnewprofilepicture=async ()=>{
    const email=localStorage.getItem('email');
    
    if(!email)return;
    try{
      await axios.put(`http://localhost:5000/auth/setprofilepicture/${email}`,{ imageUrl: svg });
        Navigate('/sign-in');
    }
    catch(error:any){
      console.error('Error updating invoice:', error);
      throw error;
    }
    localStorage.removeItem('email');
  }
  return (
    <div className='flex bg-slate-200'>
        <div className='flex flex-col gap-8 rounded-lg bg-white w-1/4 relative'>
            <Popover>
             <PopoverTrigger><Button className='w-5/6 mt-10 text-wrap'>Background Color</Button></PopoverTrigger>
             <PopoverContent><ColorSlector
             setbackgroundcolor={setbackgroundcolor}
             /></PopoverContent>
             </Popover>
        
            <Popover>
             <PopoverTrigger><Button className='w-5/6  text-wrap'>Hair Color</Button></PopoverTrigger>
             <PopoverContent><ColorSlector
             setbackgroundcolor={sethaircolour}
             /></PopoverContent>
             </Popover>
            <div className='flex flex-col indent-10 gap-2'>
            Eye Brows
            <Slider className='w-5/6 ml-auto mr-auto' defaultValue={[eyevalueindex]}
                min={0}
                max={13} onValueChange={handleEyebrowchange}/>
            </div>
            
            <div className='flex flex-col indent-10 gap-2'>
            Eye 
            <Slider className='w-5/6 ml-auto mr-auto' defaultValue={[eyevalueindex]}
                min={0}
                max={25} onValueChange={handleEyechange}/>
            </div>
            <div className='flex flex-col indent-10 gap-2'>
            Hair
            <Slider className='w-5/6 ml-auto mr-auto' defaultValue={[eyevalueindex]}
                min={0}
                max={hairvariants.length-1} onValueChange={handlehairchange}/>
            </div>
            <div className='flex flex-col indent-10 gap-2'>
            Hair
            <Slider className='w-5/6 ml-auto mr-auto' defaultValue={[eyevalueindex]}
                min={0}
                max={mouthvariants.length-1} onValueChange={handlemouthchange}/>
            </div>
            <div>
            <div className='flex flex-col gap-2 ml-8'>
                Skin Colour
                <CirclePicker
                onChange={handleskincolourchange}
                colors={colors}
                width='22svw'
                circleSize={20}
                />
            </div>
            </div>
            
            <Button className='w-5/6  text-wrap ml-auto mr-auto ' onClick={randomize}>Randdomize</Button>
            
            <Button className='w-5/6  text-wrap ml-auto mr-auto' onClick={setnewprofilepicture}>Sign Up</Button>
        </div>
        <div
        style={{backgroundColor:`#${backgroundcolor}`}}
        className='flex-1 h-auto rounded-lg ml-5'>
        <img style={{width:"42svw"}} className='ml-auto mr-auto mt-20' src={svg} alt="pp" />
        </div>
    </div>
  )
}

export default ProfilePicture