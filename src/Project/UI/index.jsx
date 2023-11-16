import React, {useState} from 'react'
import { Divider, Button, Table, Tooltip, Input, Card } from 'antd';
import { useQuery, useMutation } from 'react-query';

import Schedule from '../../shared/service/Schedule';

const UI = () => {

    const currentDate = new Date().toISOString().split('T')[0];
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(currentDate);

    const { data, isLoading, isError, error } = useQuery(['events', startDate, endDate], () => Schedule.getSchedule(startDate, endDate),{});

    console.log(data, startDate, endDate);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'event_date',
            key: 'event_date',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Age',
            dataIndex: 'event_time',
            key: 'event_time',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Address',
            dataIndex: 'event_home_team',
            key: 'event_home_team',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Action',
            dataIndex: 'event_away_team',
            key: 'event_away_team',            
        },    
    ]
  return (
    <div>
      <Card>
        <div className={'table-responsive'}>
            <Table 
                columns={columns} 
                dataSource={data} 
                loading={isLoading} 
                rowKey={'event_key'}
                pagination={false}
                scroll={{ x: true }}
            />
        </div>
      </Card>
    </div>
  );
}

export default UI