import React, { useEffect, useState } from 'react';

const AT_RY_PortList = (props) => {

    const [isPlaces, setPlaces] = useState([]);
    const places = ['Baltimore, Maryland',
                    'Boston, Massachusetts',
                    'Cape Libery, New Jersey',
                    'Fort Lauderdale, Florida',
                    'Galveston, Texas',
                    'Honolulu (Oahu), Hawaii',
                    'Los Angeles, California',
                    'Miami, Florida',
                    'New Orleans, Louisiana',
                    'Orlando (Port Canaveral), FL',
                    'Quebec City, Quebec, Canada',
                    'San Diego, California',
                    'San Juan, Puerto Rico',
                    'Seattle, Washington',
                    'Seward, Alaska',
                    'Tampa, Florida',
                    'Vancouver, British Columbia'];
    
    let items = [];

    const sortPlaces = () => {
        let newPlaces = [];
        for (let index = 0; index < places.length; index++) {
            items.push({id: index, name: places[index], selected: false});
            if ((index+1)%5 === 0) {
                newPlaces.push({group: (index+1)/5 , items: items})
                items = [];
            }else{
                if (index+1 == places.length) {
                    newPlaces.push({group: (index+1)/5 + 1, items: items});
                }
            }
        }
        setPlaces(newPlaces);
    }

    const filterSelected = (array) => {
        let filtered = [];
        array.forEach((a,i) => {
            a.items.forEach((i,j) => {
                if (i.selected) {
                    filtered.push({id: i.id, name: i.name});
                }
            });
        });
        
        props.setPorts(filtered);
    };
    
    const changeSelection = (itIndex, groupIndex) => {
        let array = [...isPlaces];
        array[groupIndex].items[itIndex].selected = !array[groupIndex].items[itIndex].selected;
        setPlaces(array);
        filterSelected(array);
    }

    useEffect(() => {
        sortPlaces();
    },[]);

    return (
        <div className='at_ry_menu'>
            <div className='at_ry_destinationOptions'>
                <div><p>THE AMERICAS & THE CARIBBEAN</p></div>
                <div><p>EUROPE</p></div>
                <div><p>ASIA & SOUTHPACIFIC</p></div>
            </div>
            <div className='at_ry_destinationList'>
                <div className='at_ry_destinationList--respItems'>
                    <img src="left-arrow.png" alt="left-arrow" className='at_ry_destinationList__img' onClick={() => props.setActiveMenu(0)}/>
                    <p className='at_ry_destinationList__title'>Select Departure Port</p>
                    <p className='at_ry_destinationList__done' onClick={() => props.setActiveMenu(0)}>APPLY</p>
                </div>
                <div className='at_ry_destinationOptions--resp'>
                    <div><p className='at_ry_destinationOptions__first'>THE AMERICAS & <br/>THE CARIBBEAN</p></div>
                    <div><p className='at_ry_destinationOptions__second'>EUROPE</p></div>
                    <div><p className='at_ry_destinationOptions__first'>ASIA & <br/>SOUTH PACIFIC</p></div>
                </div>
                {
                    isPlaces.map((p,index)=>{
                        return(
                            <div key={index} className='at_ry_destinationList--content'>
                                {
                                    p.items.map((it,i) => {
                                        return(
                                            <div
                                                onClick={() => changeSelection(i, index)}
                                                key={i} 
                                                className={'at_ry_destinationList__item '+(it.selected ? 'at_ry_destinationList__item__barOn' : '')}
                                            >
                                                <span className={it.selected ? 'at_ry_destinationList__item__spanOn' : ''}>
                                                    {it.name}
                                                </span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default AT_RY_PortList;