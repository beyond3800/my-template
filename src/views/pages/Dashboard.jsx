import React, { useState } from 'react'
import { BarChart, LineChart, PieChart } from '../../components/chart'
import Wrap from '../../components/Wrap'
import Content from '../../components/Content'
import Table from '../../components/Table'
import CustomBtn from '../../components/button/CustomBtn'
import Dropdown from '../../components/dropdowns/Dropdown'

const Dashboard = () => {
  return (
    <Content>
      <div className="pt-2">
        <Wrap>
          <LineChart data={[95, 59, 80, 81, 56]} title='School' labels={['January', 'February', 'March', 'April', 'May']} />
          <LineChart data={[65, 75, 85, 95, 55]} title='Performance' labels={['June', 'July', 'August', 'September', 'October']} />
          <LineChart data={[45, 30, 60, 70, 80]} title='Attendance' labels={['November', 'December', 'January', 'February', 'March']} />
          <LineChart data={[55, 65, 75, 85, 95]} title='Engagement' labels={['April', 'May', 'June', 'July', 'August']} />
        </Wrap>
        {/* <BarChart data={[12, 19, 3, 5, 2]} title='Sales Data' /> */}
        <Table
          datas={[
            { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
            { id: 3, name: 'Alice Johnson', age: 25, email: 'alice@example.com' },
            { id: 4, name: 'Bob Brown', age: 42, email: 'bob@example.com' },
          ]}
          header={`Your header`}
          ths={[
            {id: 1, th:'ID'},
            {id: 2, th:'Name'},
            {id: 3, th:'Age'},
            {id: 4, th:'Email'},
            {id: 5, th:'View'},
            {id: 6, th:'Edit'},
            {id: 7, th:'Delete'}
          ]}
          btn={[
            { id: 1, btn: <CustomBtn title={`View`} style={`btn-primary px-4`} type={`reset`}/> },
            { id: 2, btn: <CustomBtn title={`Edit`} style={`btn-success px-4`}/> },
            { id: 3, btn: <CustomBtn title={`Delete`} style={`btn-danger px-4`}/> },
          ]}
        />
      </div>
    </Content>
  )
}

export default Dashboard