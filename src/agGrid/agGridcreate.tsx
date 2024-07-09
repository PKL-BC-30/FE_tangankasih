import { createSignal, onCleanup } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './agGrid.css'

const UserList = () => {
  let gridApi;

  // Function to retrieve data from localStorage
  const getUsersFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
  };

  // Function to handle edit action
  const handleEdit = (email) => {
    // Implement your edit logic here, e.g., redirect to edit page
    console.log(`Edit user with email: ${email}`);
  };

  // Function to handle delete action
  const handleDelete = (email) => {
    const users = getUsersFromLocalStorage();
    const updatedUsers = users.filter((user) => user.email !== email);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    gridApi?.applyTransaction({ remove: [email] });
  };

  // Define column definitions for ag-Grid
  const columnDefs = [
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Full Name', field: 'fullName', sortable: true, filter: true },
    { headerName: 'Password', field: 'password', sortable: true, filter: true },
    { headerName: 'Date of Birth', field: 'dateOfBirth', sortable: true, filter: true },
    {
      headerName: 'Actions',
      cellRenderer: (params) => {
        const { email } = params.data;

        const handleEditClick = () => {
          handleEdit(email);
        };

        const handleDeleteClick = () => {
          handleDelete(email);
        };

        return (
          <div class="action-buttons">
            <button class="edit-button" onClick={handleEditClick}>
              Edit
            </button>
            <button class="delete-button" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  // Function to set gridApi
  const onGridReady = (params) => {
    gridApi = params.api;
    gridApi?.sizeColumnsToFit();
  };

  // Define row data using local storage data
  const [rowData, setRowData] = createSignal(getUsersFromLocalStorage());

  // Cleanup function
  onCleanup(() => {
    // Cleanup code if needed
  });

  return (
    <div class="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
      <AgGridSolid
        columnDefs={columnDefs}
        rowData={rowData()}
        domLayout='autoHeight'
        onGridReady={onGridReady}
        defaultColDef={{
          flex: 1,
          minWidth: 150,
          resizable: true,
        }}
      />
    </div>
  );
};

export default UserList;
