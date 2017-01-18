import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock, { Themes } from '../src/index';
import moment from 'moment'

const date1 = new Date();
const date2 = new Date();
date2.setHours(3);

const date3 = new Date();
date3.setHours(8);

const WIDTH = 200;

const Component = (
    <div style={{textAlign: 'center'}}>
        <div>
            <span><AnalogClock width={WIDTH} theme={Themes.light} date={date1} /></span>
            <span><AnalogClock width={WIDTH} theme={Themes.light} date={date2} /></span>
            <span><AnalogClock width={WIDTH} theme={Themes.light} date={date3} /></span>
        </div>

        <div>
            <span><AnalogClock width={WIDTH} theme={Themes.dark} /></span>
            <span><AnalogClock width={WIDTH} theme={Themes.aqua} /></span>
            <span><AnalogClock width={WIDTH} theme={Themes.lime} /></span>
            <span><AnalogClock width={WIDTH} theme={Themes.sherbert} /></span>
            <span><AnalogClock width={WIDTH} theme={Themes.navy} /></span>
        </div>
    </div>
);

ReactDOM.render(Component, document.getElementById('app'));
