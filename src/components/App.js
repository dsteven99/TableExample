import React from 'react';
import Table from './Table';

const tableData = 
    [
        {
            clientMatter: '111111.00001',
            clientName: 'Pepsi Cola',
            matterName: 'Breach of Contract',
            group: 'CMLT',
            billingAttorney: 'Stevenson, Dan',
            lastBillDate: '09/09/2020'
        },
        {
            clientMatter: '222222.00002',
            clientName: 'Coca-Cola',
            matterName: 'Consulting',
            group: 'CMLT',
            billingAttorney: 'Stevenson, Dan',
            lastBillDate: '10/09/2020'
        },
        {
            clientMatter: '333333.00003',
            clientName: 'Brightmoor',
            matterName: 'Litigation',
            group: 'CMLT',
            billingAttorney: 'Stevenson, Dan',
            lastBillDate: '08/09/2020'
        },
        {
            clientMatter: '444444.00004',
            clientName: 'Ford Motor',
            matterName: 'Breach of Contract',
            group: 'CMLT',
            billingAttorney: 'Stevenson, Dan',
            lastBillDate: '07/09/2020'
        },
        {
            clientMatter: '555555.00005',
            clientName: 'Dell Computers',
            matterName: 'Breach of Contract',
            group: 'CMLT',
            billingAttorney: 'Stevenson, Dan',
            lastBillDate: '6/09/2020'
        },
        {
            clientMatter: '6666666-00006',
            clientName: 'Pepsi Cola',
            matterName: 'Employee issues',
            group: 'CMLT',
            billingAttorney: 'Stevenson, Dan',
            lastBillDate: '04/09/2020'
        }
    ];

const columns = [
    {header:'C/M', width: 15, align: 'right', dataKey: 'clientMatter', sortable: true},
    {header:'Client', width: 20, dataKey: 'clientName', sortable: true},
    {header:'Matter', width: 25, dataKey: 'matterName', sortable: true},
    {header:'Group', width: 10, dataKey: 'group'},
    {header:'Billing Attorney', width: 20, dataKey: 'billingAttorney'},
    {header:'Last Bill Date', width: 10, align: "right", dataKey:'lastBillDate'}
]


const App = () => {

    return (
        <div className="container">
            <Table 
                data={tableData} 
                perPage={2} 
                columns={columns} 
                tableStyle="table" 
            />
        </div>
    );

}

export default App;