import React, {FC, useEffect, useState} from 'react';
import {EuiSuperDatePicker} from "@elastic/eui";
import dateMath from '@elastic/datemath';
import {Moment} from "moment";

interface Props {
    isLoading: boolean;
    onChange?: (start: Moment, end: Moment) => void;
}

export const Datepicker: FC<Props> = ({isLoading = false, onChange = () => {}}) => {
    const [start, setStart] = useState('now-30m');
    const [end, setEnd] = useState('now');

    const onTimeChange = ({start, end}) => {
        setStart(start);
        setEnd(end);
        const startMoment = dateMath.parse(start);

        if (!startMoment || !startMoment.isValid()) {
            throw new Error('Unable to parse start string');
        }

        const endMoment = dateMath.parse(end, { roundUp: true });
        if (!endMoment || !endMoment.isValid()) {
            throw new Error('Unable to parse end string');
        }

        if (onChange) {
            onChange(startMoment.utc(), endMoment.utc())
        }
    };

    useEffect(() => {
        onTimeChange({start, end})
    }, [])


    return (
        <EuiSuperDatePicker
            isLoading={isLoading}
            start={start}
            end={end}
            onTimeChange={onTimeChange}
        />
    );
}
