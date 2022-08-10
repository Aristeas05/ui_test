import React, { useEffect, useState } from 'react';

const AT_RY_DateList = (props) => {

    const actualYear = new Date().getFullYear();

    const years = [actualYear-1,actualYear,actualYear+1];
    const [isFirstDate, setFirstDate] = useState({year: 3000, month: 0, text: ''});
    const [isSecondDate, setSecondDate] = useState({year: 3000, month: 0, text: ''});

    const chooseOption = (year,month,text) => {
        if (year < isSecondDate.year) {
            if (year > isFirstDate.year) {
                setSecondDate({year: year, month: month, text: text});
            }else if (year === isFirstDate.year) {
                if (month < isFirstDate.month) {
                    setSecondDate(isFirstDate);
                    setFirstDate({year: year, month: month, text: text});
                }else{
                    setSecondDate({year: year, month: month, text: text});
                }
            }else{
                setFirstDate({year: year, month: month, text: text});
            }
        }else if (year === isSecondDate.year) {
            if (month < isSecondDate.month) {
                setFirstDate({year: year, month: month, text: text});
            }else{
                setFirstDate(isSecondDate);
                setSecondDate({year: year, month: month, text: text});
            }
        }else{
            setSecondDate({year: year, month: month, text: text});
        }
    }

    const classChange = (year, month) => {
        if (isFirstDate.year === year && isFirstDate.month === month) {
            return 'at_ry_dateList__tdOnA at_ry_dateList__selected';
        }else if (isSecondDate.year === year && isSecondDate.month === month) {
            return 'at_ry_dateList__tdOnB at_ry_dateList__selected';
        }else if (isFirstDate.year === isSecondDate.year && isSecondDate.year === year && month > isFirstDate.month && month < isSecondDate.month){
            return 'at_ry_dateList__range';
        }else if (year>isFirstDate.year && year<isSecondDate.year) {
            return 'at_ry_dateList__range';
        }else if (year === isFirstDate.year && year < isSecondDate.year) {
            if (month > isFirstDate.month) {
                return 'at_ry_dateList__range';
            }else{
                return '';
            }
        }else if (year === isSecondDate.year && year > isFirstDate.year){
            if (month < isSecondDate.month) {
                return 'at_ry_dateList__range';
            }else{
                return '';
            }
        }
    }

    useEffect(() => {
        props.setDates({date1: isFirstDate, date2: isSecondDate});
    },[isFirstDate,isSecondDate]);

    return (
        <div className='at_ry_menu'>
            <div className='at_ry_destinationList or'>
                <div className='at_ry_destinationList--respItems'>
                    <img src="left-arrow.png" alt="left-arrow" className='at_ry_destinationList__img' onClick={() => props.setActiveMenu(0)}/>
                    <p className='at_ry_destinationList__title'>Select Travel Dates</p>
                    <p className='at_ry_destinationList__done' onClick={() => props.setActiveMenu(0)}>APPLY</p>
                </div>
            </div>
            <div className='at_ry_dateList'>
                {
                    years.map((y,index)=>{
                        return(
                            <div key={index} className='at_ry_dateList--group'>
                                <div className='at_ry_dateList--group--year'>
                                    <p className='at_ry_dateList__line'></p>
                                    <p>
                                        {y}
                                    </p>
                                    <p className='at_ry_dateList__line'></p>
                                </div>
                                <table cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <td class={classChange(y,1)} onClick={() => chooseOption(y,1,'Jan')}>Jan</td>
                                            <td class={classChange(y,2)} onClick={() => chooseOption(y,2,'Feb')}>Feb</td>
                                            <td class={classChange(y,3)} onClick={() => chooseOption(y,3,'Mar')}>Mar</td>
                                            <td class={classChange(y,4)} onClick={() => chooseOption(y,4,'Apr')}>Apr</td>
                                        </tr>
                                        <tr>
                                            <td class={classChange(y,5)} onClick={() => chooseOption(y,5,'May')}>May</td>
                                            <td class={classChange(y,6)} onClick={() => chooseOption(y,6,'Jun')}>Jun</td>
                                            <td class={classChange(y,7)} onClick={() => chooseOption(y,7,'Jul')}>Jul</td>
                                            <td class={classChange(y,8)} onClick={() => chooseOption(y,8,'Aug')}>Aug</td>
                                        </tr>
                                        <tr>
                                            <td class={classChange(y,9)} onClick={() => chooseOption(y,9,'Sep')}>Sep</td>
                                            <td class={classChange(y,10)} onClick={() => chooseOption(y,10,'Oct')}>Oct</td>
                                            <td class={classChange(y,11)} onClick={() => chooseOption(y,11,'Nov')}>Nov</td>
                                            <td class={classChange(y,12)} onClick={() => chooseOption(y,12,'Dec')}>Dec</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default AT_RY_DateList;