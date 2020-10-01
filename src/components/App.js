import React from 'react';
import Table from './Table';

class App extends React.Component {

    state = {
        tableData: [],
        columns: []
    }

    componentDidMount() {
        const columns = [
            { header: 'C/M', width: 15, align: 'right', dataKey: 'clientMatter', sortable: true },
            { header: 'Client', width: 20, dataKey: 'clientName', sortable: true },
            { header: 'Matter', width: 20, dataKey: 'matterName', sortable: true },
            { header: 'Group', width: 10, dataKey: 'group' },
            { header: 'Billing Attorney', width: 15, dataKey: 'billingAttorney' },
            { header: 'Last Bill Date', width: 10, align: "right", dataKey: 'lastBillDate' },
            { header: 'Status', width: 10, dataKey: 'active', renderer: this.renderColumn }
        ];

        const tableData =
            [
                {
                    clientMatter: '111111.00001',
                    clientName: 'Pepsi Cola',
                    matterName: 'Breach of Contract',
                    group: 'CMLT',
                    billingAttorney: 'Stevenson, Dan',
                    lastBillDate: '09/09/2020',
                    active: true
                },
                {
                    clientMatter: '222222.00002',
                    clientName: 'Coca-Cola',
                    matterName: 'Consulting',
                    group: 'CMLT',
                    billingAttorney: 'Stevenson, Dan',
                    lastBillDate: '10/09/2020',
                    active: false
                },
                {
                    clientMatter: '333333.00003',
                    clientName: 'Brightmoor',
                    matterName: 'Litigation',
                    group: 'CMLT',
                    billingAttorney: 'Stevenson, Dan',
                    lastBillDate: '08/09/2020',
                    active: false
                },
                {
                    clientMatter: '444444.00004',
                    clientName: 'Ford Motor',
                    matterName: 'Breach of Contract',
                    group: 'CMLT',
                    billingAttorney: 'Stevenson, Dan',
                    lastBillDate: '07/09/2020',
                    active: true
                },
                {
                    clientMatter: '555555.00005',
                    clientName: 'Dell Computers',
                    matterName: 'Breach of Contract',
                    group: 'CMLT',
                    billingAttorney: 'Stevenson, Dan',
                    lastBillDate: '6/09/2020',
                    active: true
                },
                {
                    clientMatter: '6666666-00006',
                    clientName: 'Pepsi Cola',
                    matterName: 'Employee issues',
                    group: 'CMLT',
                    billingAttorney: 'Stevenson, Dan',
                    lastBillDate: '04/09/2020',
                    active: false
                }
            ];

        this.setState({ tableData: tableData, columns: columns });
    }

    renderColumn = (item) => {
        if(item.active){
            return (
                <div>Opened</div>
            );
        }
        else{
            return (
                <div>Closed</div>
            );
        }
    };

    render() {
        return (
            <div className="container">
                <Table
                    data={this.state.tableData}
                    perPage={3}
                    columns={this.state.columns}
                    tableStyle="table"
                    usePagination={true}
                />
            </div>
        );
    }
}

export default App;