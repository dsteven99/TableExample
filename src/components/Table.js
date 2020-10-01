import React from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';


class Table extends React.Component {

    state = {
        offset: 0,
        pageCount: 0,
        sortValues: {
            sortColumn: '',
            sortOrder: 'desc'
        },
        sortedData: [],
        currentPage: 0
    };

    componentDidMount(){
        const pageCount = Math.ceil(this.props.data.length / this.props.perPage);
        const data = [...this.props.data];
        this.setState({pageCount: pageCount, sortedData: data});
    }
    
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.props.perPage;
        this.setState({offset: offset, currentPage: selectedPage});
    };

    renderColumnHeaders = () => {
        return this.props.columns.map(({header, width, sortable, dataKey}, index) => {
            if(sortable){
                return <th width={`${width}%`} key={index}><button className="buttonLink" type="button" onClick={() => this.sortTable(dataKey)}>{header}</button></th>
            }
            return <th width={`${width}%`} key={index}>{header}</th>
        });
    }
    
    renderRows = () => { 
        const slice =
            this.state.sortedData.slice(
                this.state.offset,
                this.state.offset + this.props.perPage
            );

        return slice.map((item, rowIndex) => {
            const renderCells = this.props.columns.map(({dataKey, align}, cellIndex) => {
                return (
                    <td key={cellIndex} align={align ? align : 'left'}>
                        {item[dataKey]}
                    </td>
                )
            });
            return (
                <tr key={rowIndex}>
                    {renderCells}
                </tr>
            );
        });
    }

    sortTable = (dataKey) => {
        
        let values = {...this.state.sortValues};
        if(dataKey === this.state.sortValues.sortColumn){
            if(this.state.sortValues.sortOrder === 'asc'){
                values.sortOrder = 'desc';
            }
            else{
                values.sortOrder = 'asc';
            }
        }
        else{
            values.sortOrder = 'asc';
            values.sortColumn = dataKey;
        }
        
        this.setState({sortValues: values}, this.sort);
    };

    sort = () => {

        if(this.state.sortValues.sortOrder === 'asc'){
            const array = _.sortBy(this.state.sortedData, this.state.sortValues.sortColumn); 
            this.setState({sortedData: array, offset: 0, currentPage: 0});
        }
        else{
            const array = _.sortBy(this.state.sortedData, this.state.sortValues.sortColumn).reverse();
            this.setState({sortedData: array, offset: 0, currentPage: 0});
        }
    };

    render(){
        return (
            <div>
                <table className={this.props.tableStyle}>
                    <thead>
                        <tr>
                           {this.renderColumnHeaders()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        forcePage={this.state.currentPage}
                />
            </div>
        )
    }
    
}

export default Table;