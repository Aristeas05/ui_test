import React, { useEffect, useState } from 'react';

const OR_RY_Picker = ({ id, pickType, smallText, titleText, selectedDestinations, selectedDates}) => {
    const [isTitleText, setTitleText] = useState(titleText);
    const [isSelectedData, setSelectedData] = useState(selectedDestinations);
    const [isPickType, setPickType] = useState('');
    const [isDates, setDates] = useState(selectedDates);

    const pickerType = (pickType) => {
        switch (pickType) {
            case '1':
                setPickType('arrow_down');
                break;
            case '2':
                setPickType('calendar');
                break;
        }
    };    

    useEffect(()=>{
        setSelectedData(selectedDestinations);
        pickerType(pickType);
    },[selectedDestinations]);

    useEffect(()=>{
        setDates(selectedDates);
    },[selectedDates]);

    return(
        <>
            <div className='or_ry_dp'>
                <div className='or_ry_dp--content'>
                    <p className='or_ry_dp__smtxt'>{smallText}</p>
                </div>
                <div className='or_ry_dp--dropdown'>
                    <p className='or_ry_dp__mdtxt'>
                        {
                            isSelectedData?.length > 0 || isDates?.date1 != undefined 
                            ?
                                pickType === '1'
                                ?
                                    isSelectedData[0]?.name
                                :
                                    isDates?.date1.year != 3000 && isDates?.date2.year != 3000
                                    ?
                                        isDates?.date1?.text + ' ' + isDates?.date1?.year +' ➔ ' +  isDates?.date2?.text + ' ' + isDates?.date2?.year
                                    : isTitleText
                            :
                                isTitleText
                        }
                    </p>
                    <p className='or_ry_dp__mdtxtR'>
                        {
                            isSelectedData?.length > 0 || isDates?.date1 != undefined 
                            ?
                                pickType === '1'
                                ?
                                    isSelectedData[0]?.name
                                :
                                    isDates?.date1.year != 3000 && isDates?.date2.year != 3000
                                    ?
                                        isDates?.date1?.text + ' ' + isDates?.date1?.year +' ➔ ' +  isDates?.date2?.text + ' ' + isDates?.date2?.year
                                    : isTitleText
                            :
                                smallText+' '+isTitleText
                        }
                    </p>
                    {
                        isSelectedData?.length > 0
                        ?
                        <p className='or_ry_dp__counter'>{(isSelectedData?.length > 1 ? '+'+(isSelectedData?.length-1)  : isSelectedData?.length)}</p>
                        :
                        <img className={'or_ry_dp__ico'+pickType} src={isPickType+'.png'} alt={isPickType} />
                    }
                </div>
            </div>
        </>
        
    );
}

export default OR_RY_Picker;