import React, { useState, useEffect } from 'react'
import {   Card } from 'antd';
import { useQuery} from 'react-query';
import { SearchTableInput, Table } from "ant-table-extensions";
import {
  SearchOutlined,
} from "@ant-design/icons";
import {  Flex } from "../../shared/components";

import Schedule from '../../shared/service/Autopay';

const UI = () => {

  const { data, isLoading, isError, error } = useQuery(['events'], () => Schedule.AutoPayEmployerJobtitle(), {});


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'item',
      dataIndex: 'item',
      key: 'item',
      render: (text) => <span>{text}</span>,
    },

  ]
  const columnsT1 = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'item',
      dataIndex: 'item',
      key: 'item',
      render: (text) => <span>{text}</span>,
    },

  ]

  const employers = data?.employers
  const [searchDataemployers, setSearchDataemployers] = useState([]);
    useEffect(() => {
    if (employers && Array.isArray(employers)) {
      setSearchDataemployers([...employers]);
    }
  }, [employers]);

  const jobtitles = data?.jobTitles
   const [searchDatajobtitles, setSearchDatajobtitles] = useState([]);
    useEffect(() => {
    if (jobtitles && Array.isArray(jobtitles)) {
      setSearchDatajobtitles([...jobtitles]);
    }
  }, [jobtitles]);

  return (
    <>
      <div>
        <Card>
           <Flex
          alignItems={"center"}
          justifyContent={"between"}
          mobileFlex={false}
        >
          <div className="mr-md-3 mb-3">
            <SearchTableInput
              inputProps={{
                placeholder: "Search",
                prefix: <SearchOutlined />,
              }}
              fuzzySearch={true}
              setDataSource={setSearchDataemployers}
              dataSource={employers}
              columns={columns}
            />
            <div className="text-muted">
              <small>
                <i>Search Anything.. the world is your oyster</i>
              </small>
            </div>
          </div>        
        </Flex>

          <div className={'table-responsive'}>
            <Table
              columns={columns}
              dataSource={searchDataemployers}
              setDataSource={setSearchDataemployers}
              loading={isLoading}
              rowKey={'id'}
              pagination={
                {
                  defaultPageSize: 10,
                  showSizeChanger: true,
                  pageSizeOptions: ['10', '20', '30'],
                  showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
                }
              }
            
            />
          </div>
        </Card>
      </div>
      <div>
        <Card>
           <Flex
          alignItems={"center"}
          justifyContent={"between"}
          mobileFlex={false}
        >
          <div className="mr-md-3 mb-3">
            <SearchTableInput
              inputProps={{
                placeholder: "Search",
                prefix: <SearchOutlined />,
              }}
              fuzzySearch={true}
              setDataSource={setSearchDatajobtitles}
              dataSource={jobtitles}
              columns={columnsT1}
            />
            <div className="text-muted">
              <small>
                <i>Search Anything.. the world is your oyster</i>
              </small>
            </div>
          </div>        
        </Flex>
        
          <div className={'table-responsive'}>
            <Table
              columns={columnsT1}
              setDataSource={setSearchDatajobtitles}
              dataSource={searchDatajobtitles}
              loading={isLoading}
              rowKey={'id'}
              pagination={
                {
                  defaultPageSize: 10,
                  showSizeChanger: true,
                  pageSizeOptions: ['10', '20', '30'],
                  showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
                }
              }
             
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default UI