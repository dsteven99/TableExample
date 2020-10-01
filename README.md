# Table

## Dependencies
See package.json for dependencies

## Props

Name | Type | Descriptions | Required
---- | ---- | ------------ |  --------
columns | Array | Array of objects that contain settings for columns (see Column section below) | Yes
data | Array | Array of objects that represents your table data | Yes
perPage | Number | The number of table rows per page. | Yes - If usePagination prop is true
tableStyle | String | CSS Class name used to style the table | No
usePagination | Bool | Allows the pagination on the table rows. Default value is true. False turns it off | No

### Column
An array of objects representing column settings, need to be passed into the Table compenent.

    const columns = [
        { header: 'C/M', width: 15, align: 'right', dataKey: 'clientMatter', sortable: true },
        { header: 'Client', width: 20, dataKey: 'clientName', sortable: true },
        { header: 'Matter', width: 20, dataKey: 'matterName', sortable: true },
        { header: 'Group', width: 10, dataKey: 'group' },
        { header: 'Billing Attorney', width: 15, dataKey: 'billingAttorney' },
        { header: 'Last Bill Date', width: 10, align: "right", dataKey: 'lastBillDate' },
        { header: 'Status', width: 10, dataKey: 'active', renderer: this.renderColumn }
    ];

#### Column Settings

Name | Type | Descriptions | Required
---- | ---- | ------------ | --------
header | String | Represents the column's header text | Yes
width | Number | Represents the column's width percentage | No
align | String | TD tag's align value. Default value is left. | No
dataKey | String | this is the property name on the object (in the data array passed into the Table prop) | Yes
sortable | Bool | If true, column will be sortable | No
renderer | Function | Pass in a function to override how the TD tag gets rendered. The function must return JSX. | No