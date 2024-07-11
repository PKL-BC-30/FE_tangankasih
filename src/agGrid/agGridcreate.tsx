import { createSignal, onCleanup } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './agGrid.css';

const UserList = () => {
  let gridApi;
  const [isEditing, setIsEditing] = createSignal(false);
  const [currentUser, setCurrentUser] = createSignal(null);
  const [email, setEmail] = createSignal('');
  const [fullName, setFullName] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [dateOfBirth, setDateOfBirth] = createSignal('');
  const [showPassword, setShowPassword] = createSignal(false);

  // Function to retrieve data from localStorage
  const getUsersFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
  };

  // Function to handle edit action
  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setEmail(user.email);
    setFullName(user.fullName);
    setPassword(user.password);
    setDateOfBirth(user.dateOfBirth);
  };

  // Function to handle delete action
  const handleDelete = (email) => {
    const users = getUsersFromLocalStorage();
    const updatedUsers = users.filter((user) => user.email !== email);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setRowData(updatedUsers);
  };

  // Function to handle save action
  const handleSave = () => {
    const users = getUsersFromLocalStorage();
    const updatedUsers = users.map((user) =>
      user.email === currentUser().email
        ? { email: email(), fullName: fullName(), password: password(), dateOfBirth: dateOfBirth() }
        : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setRowData(updatedUsers);
    setIsEditing(false);
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
        const { data } = params;
        return (
          <div class="action-buttons">
            <button class="edit-button" onClick={() => handleEdit(data)}>
              Edit
            </button>
            <button class="delete-button" onClick={() => handleDelete(data.email)}>
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
    <div class="grid-form-container">
      <div class="ag-theme-alpine" style={{ height: '500px', flex: 1 }}>
        <AgGridSolid
          columnDefs={columnDefs}
          rowData={rowData()}
          domLayout="autoHeight"
          onGridReady={onGridReady}
          defaultColDef={{
            flex: 1,
            minWidth: 150,
            resizable: true,
          }}
        />
      </div>
      {isEditing() && (
        <div class="edit-form">
          <h3>Edit User</h3>
          <label>
            Email:
            <input type="text" value={email()} onInput={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Full Name:
            <input type="text" value={fullName()} onInput={(e) => setFullName(e.target.value)} />
          </label>
          <label>
            Password:
            <input type={showPassword() ? 'text' : 'password'} value={password()} onInput={(e) => setPassword(e.target.value)} />
            <button type="button" class="toggle-password" onClick={() => setShowPassword(!showPassword())}>
              <i class={showPassword() ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
            </button>
          </label>
          <label>
            Date of Birth:
            <input type="date" value={dateOfBirth()} onInput={(e) => setDateOfBirth(e.target.value)} />
          </label>
          <div class="button-container">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
