import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const Table = props => {
  const columns = [
    {
      name: "Store Name",
      selector: "name",
      sortable: true,
      grow: 2
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      hide: "sm",
      
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      hide: "sm"
    },
   
    {
      name: "Mobile",
      selector: "mobile",
      sortable: true
    },
    {
      name: "Addresh",
      selector: "addresh.name",
      sortable: true,
      hide: "md"
    },
    {
      name: "Date",
      selector: "address.date",
      sortable: true,
      hide: "md"
    },
    {
      name: "Buttons",
      button: true,
      cell: row =>
        row.showButtons ? (
          <>
            <button
              onClick={() => props.click(row.name)}
              style={{ marginRight: "5px", width:"25px", height:"25px", backgroundColor:"ButtonFace", borderRadius:'100%', border:"none", outline:"none"  }}
            >
            <i class="ri-pencil-line"></i>
            </button>
            <button onClick={() => props.click(row.name)}
            style={{ marginRight: "5px", width:"25px", height:"25px", backgroundColor:"ButtonFace",   borderRadius:'100%', border:"none", outline:"none"   }}
            ><i class="ri-delete-bin-line"></i></button>
          </>
        ) : null
    }
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
   
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
