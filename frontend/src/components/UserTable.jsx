import React from 'react';
import UserRow from './UserRow';
import styles from './UserTable.module.css';

const UserTable = ({ users, onUpdate, onDelete }) => {
  if (users.length === 0) {
    return <div className={styles.empty}>No records available.</div>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Domain</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow 
              key={user.id} 
              user={user} 
              index={index + 1} 
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
