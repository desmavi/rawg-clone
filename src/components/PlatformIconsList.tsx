import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons'; // Importa il tipo di icona

import { Platforms } from '../services/game-service';

const platformsMap : { [key: string]: IconType }  = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
};

interface PlatformIconsList {
    parent_platforms: Platforms[]
}

const PlatformIconsList= ({ parent_platforms } : PlatformIconsList) => {
    return (
        <div className='flex'>
            {parent_platforms.map(el => {
                const IconComponent = platformsMap[el.platform.slug];
                return IconComponent ? <IconComponent key={el.platform.id} className="me-2 opacity-50" /> : null;
            })}
        </div>
    );
};


export default PlatformIconsList

