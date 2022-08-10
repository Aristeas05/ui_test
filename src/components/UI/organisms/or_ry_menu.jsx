import React, { useEffect, useState } from 'react';
import MoRyPicker from '../molecules/mo_ry_picker';
import AtRyButton from '../atoms/at_ry_button';
import AtRyDestinationList from '../atoms/at_ry_destinationList';
import AtRyPortList from '../atoms/at_ry_portList';
import AtRyDateList from '../atoms/at_ry_dateList';

const OR_RY_Menu = (props) => {
    const [isDestinations, setDestinations] = useState([]);
    const [isPorts, setPorts] = useState([]);
    const [isDates, setDates] = useState('');
    const [isActiveMenu, setActiveMenu] = useState(0);

    const changeActiveMenu = (option) => {
        if (isActiveMenu === option) {
            setActiveMenu(0);
        }else{
            setActiveMenu(option);
        }
        
    }

    return(
        <>
            <div className='or_ry_rp_title'>
                <p>
                    FIND A CRUISE
                </p>
            </div>
            <div className='or_ry_menu'>
                <div className={'or_ry_menu__option ' + (isActiveMenu === 1 ? 'or_ry_menu__subline':'')}>
                    <div onClick={()=>changeActiveMenu(1)}>
                        <MoRyPicker
                            id={1}
                            smallText={'Cruising to'} 
                            titleText={'Any Destination'} 
                            pickType={'1'} 
                            selectedDestinations={isDestinations}/>
                    </div>
                    {
                        isActiveMenu === 1
                        ?
                        <AtRyDestinationList setDestinations={setDestinations} setActiveMenu={setActiveMenu}/>
                        : ''
                    }
                </div>
                <div className={'or_ry_menu__option ' + (isActiveMenu === 2 ? 'or_ry_menu__subline':'')}>
                    <div onClick={()=>changeActiveMenu(2)}>
                        <MoRyPicker
                            id={2} 
                            smallText={'Departing from'} 
                            titleText={'Any Port'} 
                            pickType={'1'}
                            selectedDestinations={isPorts}/>
                    </div>
                    {
                        isActiveMenu === 2
                        ?
                        <AtRyPortList setPorts={setPorts} setActiveMenu={setActiveMenu}/>
                        : ''
                    }
                </div>
                <div className={'or_ry_menu__option ' + (isActiveMenu === 3 ? 'or_ry_menu__subline':'')}>
                    <div onClick={()=>changeActiveMenu(3)}>
                        <MoRyPicker 
                            id={3} 
                            smallText={'Leaving'} 
                            titleText={'Any Date'} 
                            pickType={'2'}
                            selectedDates = {isDates}/>
                    </div>
                    {
                        isActiveMenu === 3
                        ?
                        <AtRyDateList setDates={setDates} setActiveMenu={setActiveMenu}/>
                        : ''
                    }
                </div>
                <div className='or_ry_menu__button'>
                    <AtRyButton text={'SEARCH CRUISES'} style={'at_ry_component__button'}/>
                </div>
            </div>
        </>
    );
}

export default OR_RY_Menu;