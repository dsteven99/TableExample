import React, { useState } from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';


const Table = ({data, perPage, columns, tableStyle}) => {

    const [offset, setOffset] = useState(0);
    const [pageCount] = useState(Math.ceil(data.length / perPage));
    const [sortValues, setSortValues] = useState({sortColumn: '', sortOrder: 'desc'});
    const [sortedData, setSortedData] = useState(data);
    const [currentPage, setCurrentPage] = useState(0);
    
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        setOffset(offset);
        setCurrentPage(selectedPage);
    };

    const renderRows = () => { 
        const slice =
            sortedData.slice(
                offset,
                offset + perPage
            );

        return slice.map((item, rowIndex) => {
            const renderCells = columns.map(({dataKey, align}, cellIndex) => {
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

    const sortTable = (dataKey) => {
        
        let values = {...sortValues};
        let array = [];
        if(dataKey === sortValues.sortColumn){
            if(sortValues.sortOrder === 'asc'){
                values.sortOrder = 'desc';
                array = _.sortBy(sortedData, dataKey).reverse();;
            }
            else{
                values.sortOrder = 'asc';
                array = _.sortBy(sortedData, dataKey); 
            }
        }
        else{
            values.sortOrder = 'asc';
            values.sortColumn = dataKey;
            array = _.sortBy(sortedData, dataKey);
        }
        
        setSortValues(values);
        setSortedData(array);
        setOffset(0);
        setCurrentPage(0);
    };

    const renderColumnHeaders = () => {
        return columns.map(({header, width, sortable, dataKey}, index) => {
            if(sortable){
                return <th width={`${width}%`} key={index}><button className="buttonLink" type="button" onClick={() => sortTable(dataKey)}>{header}</button></th>
            }
            return <th width={`${width}%`} key={index}>{header}</th>
        });
    }

    return (
        <div>
            <table className={tableStyle}>
                <thead>
                    <tr>
                       {renderColumnHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    forcePage={currentPage}
            />
        </div>
    )
};

export default Table;