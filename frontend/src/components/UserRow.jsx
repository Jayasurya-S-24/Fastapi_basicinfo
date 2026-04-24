import React, { useState } from 'react';
import styles from './UserRow.module.css';

const UserRow = ({ user, index, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const payload = {
      name: editData.name,
      email: editData.email,
      age: editData.age ? parseInt(editData.age, 10) : undefined,
      domain: editData.domain
    };
    await onUpdate(user.id, payload);
    setIsEditing(false);
  };

  return (
    <>
      <tr className={`${styles.row} ${isEditing ? styles.rowActive : ''}`}>
        <td className={styles.numberCell}>
          {String(index).padStart(2, '0')}
        </td>
        <td className={styles.cellMain}>{user.name}</td>
        <td className={styles.cell}>{user.email}</td>
        <td className={styles.cell}>{user.age}</td>
        <td className={styles.cell}>{user.domain}</td>
        <td className={styles.actionsCell}>
          <div className={styles.actions}>
            <button 
              className={styles.iconBtn} 
              onClick={() => setIsEditing(!isEditing)}
              title="Edit"
            >
              ✎
            </button>
            <button 
              className={styles.iconBtn} 
              onClick={() => onDelete(user.id)}
              title="Delete"
            >
              ✕
            </button>
          </div>
        </td>
      </tr>
      {/* Inline edit row smoothly animated */}
      <tr>
        <td colSpan={6} className={styles.editRowCell}>
          <div className={`${styles.editPanel} ${isEditing ? styles.editPanelOpen : ''}`}>
            <div className={styles.editForm}>
              <input 
                name="name" 
                value={editData.name} 
                onChange={handleEditChange} 
                className={styles.editInput} 
                placeholder="Name"
              />
              <input 
                name="email" 
                value={editData.email} 
                onChange={handleEditChange} 
                className={styles.editInput} 
                placeholder="Email"
              />
              <input 
                name="age" 
                type="number"
                value={editData.age} 
                onChange={handleEditChange} 
                className={styles.editInput} 
                placeholder="Age"
              />
              <input 
                name="domain" 
                value={editData.domain} 
                onChange={handleEditChange} 
                className={styles.editInput} 
                placeholder="Domain"
              />
              <button className={styles.saveBtn} onClick={handleSave}>Save</button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
