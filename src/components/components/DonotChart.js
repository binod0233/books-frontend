import * as React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject } from '@syncfusion/ej2-react-charts';
export let data1 = [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
    { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
    { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
    { x: 'Insurance', y: 16, text: '16%' }];
const  AccumulationDoughnut=()=>  {
        return (
        <div className='control-pane'>
                <div className='control-section'>
                    <AccumulationChartComponent id="pie-chart" title='Project Cost Breakdown' legendSettings={{
                visible: true,
                position: 'Top'
            }} enableSmartLabels={true} tooltip={{ enable: true }} >
                        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel]}/>
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective name='Project' dataSource={data1} xName='x' yName='y' innerRadius='40%' startAngle={0} endAngle={360} radius='70%' explode={true} explodeOffset='10%' explodeIndex={3} dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                    fontWeight: '600',
                    color: '#ffffff'
                }
            }}>
                            </AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                </div>
            </div>);
    
   
}

export default AccumulationDoughnut;