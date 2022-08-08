import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
 let data1 = [
    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 }
];
 let data2 = [
    { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 }, { x: new Date(2011, 0, 1), y: 84 }
];

const Line=()=>{
        return (<div className='control-pane'>
               
                <div className='control-section'>
                    {/* <ChartComponent id='charts' 
                    style={{ textAlign: "center" }} 
                    primaryXAxis={{
                valueType: 'DateTime',
                labelFormat: 'y',
                intervalType: 'Years',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 0 }
            }} 
            load={this.load.bind(this)} primaryYAxis={{
                labelFormat: '{value}%',
                rangePadding: 'None',
                minimum: 0,
                maximum: 100,
                interval: 20,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} width={Browser.isDevice ? '100%' : '60%'} title='Inflation - Consumer Price' loaded={this.onChartLoad.bind(this)}>
                        <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} xName='x' yName='y' name='Germany' width={2} marker={{ visible: true, width: 10, height: 10 }} type='Line'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data2} xName='x' yName='y' name='England' width={2} marker={{ visible: true, width: 10, height: 10 }} type='Line'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent> */}
                      <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={data1}
      primaryYAxis={data2}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background='#fff'
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
     
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {/* {data1.map((item, index) => <SeriesDirective key={index} {...item} />)} */}
        <SeriesDirective dataSource={data2} xName='x' yName='y' name='England' width={2} marker={{ visible: true, width: 10, height: 10 }} type='Line'>
                    </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
                </div>
            </div>);
    }
    
   

export default Line;