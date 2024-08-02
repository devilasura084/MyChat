import { createPopper, Instance } from '@popperjs/core';
import { SetStateAction, useRef, useState, useEffect } from 'react';
import ColorSlector from './ColorSlector';
import { Button } from './ui/button';

interface ColorPickerpoperprops {
    name: string
    setbackgroundcolor: React.Dispatch<SetStateAction<string>>
}

const ColorSelectorpoper = ({ name, setbackgroundcolor }: ColorPickerpoperprops) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const popperRef = useRef<HTMLDivElement>(null);
    const [popperInstance, setPopperInstance] = useState<Instance | null>(null);

    const togglePopper = () => {
        if (isOpen) {
            closePopper();
        } else {
            openPopper();
        }
    };

    const openPopper = () => {
        const instance = createPopper(buttonRef.current!, popperRef.current!, {
            placement: 'bottom',
        });
        setPopperInstance(instance);
        setIsOpen(true);
    };

    const closePopper = () => {
        popperInstance?.destroy();
        setPopperInstance(null);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen &&
                popperRef.current &&
                !popperRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)) {
                closePopper();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
             
             <button ref={buttonRef} onClick={togglePopper}>
              <span className=''>{name}</span>
            </button>
            {isOpen && (
                <div ref={popperRef}>
                    <ColorSlector
                        setbackgroundcolor={setbackgroundcolor}
                    />
                </div>
            )}
        </>
    )
}

export default ColorSelectorpoper