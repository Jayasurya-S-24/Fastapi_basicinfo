import React, { useState } from 'react';
import styles from './UserForm.module.css';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    domain: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit({ ...formData, age: formData.age ? parseInt(formData.age, 10) : undefined });
      setFormData({ name: '', age: '', email: '', domain: '' });
    } catch (err) {
      // Error handled by parent
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          value={formData.name} 
          onChange={handleChange} 
          className={styles.input}
          placeholder=" "
        />
        <label htmlFor="name" className={styles.label}>Full Name</label>
        <div className={styles.animatedBorder}></div>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          value={formData.email} 
          onChange={handleChange} 
          className={styles.input}
          placeholder=" "
        />
        <label htmlFor="email" className={styles.label}>Email Address</label>
        <div className={styles.animatedBorder}></div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <input 
            type="number" 
            id="age" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            className={styles.input}
            placeholder=" "
          />
          <label htmlFor="age" className={styles.label}>Age</label>
          <div className={styles.animatedBorder}></div>
        </div>

        <div className={styles.inputGroup}>
          <input 
            type="text" 
            id="domain" 
            name="domain" 
            value={formData.domain} 
            onChange={handleChange} 
            className={styles.input}
            placeholder=" "
          />
          <label htmlFor="domain" className={styles.label}>Domain</label>
          <div className={styles.animatedBorder}></div>
        </div>
      </div>

      <button type="submit" className={styles.submitBtn} disabled={submitting}>
        {submitting ? 'Registering...' : 'Complete Registration'}
      </button>
    </form>
  );
};

export default UserForm;
