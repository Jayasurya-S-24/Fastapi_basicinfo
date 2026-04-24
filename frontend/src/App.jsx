import { useState, useEffect } from 'react';
import axios from 'axios';
import HeroHeader from './components/HeroHeader';
import Ticker from './components/Ticker';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import styles from './App.module.css';

const API_URL = import.meta.env.VITE_API_URL || '';
const api = axios.create({ baseURL: API_URL });

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await api.get('/users/');
      setUsers(res.data);
    } catch (err) {
      setError('Unable to fetch records. The server might be unreachable.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (data) => {
    try {
      setError('');
      await api.post('/users/', data);
      await fetchUsers();
    } catch (err) {
      setError('Failed to create user record.');
      throw err;
    }
  };

  const handleUpdateUser = async (id, data) => {
    try {
      setError('');
      await api.put(`/users/${id}`, data);
      await fetchUsers();
    } catch (err) {
      setError('Failed to update user record.');
      throw err;
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      setError('');
      await api.delete(`/users/${id}`);
      await fetchUsers();
    } catch (err) {
      setError('Failed to delete user record.');
      throw err;
    }
  };

  return (
    <>
      <div className="glow-bg"></div>
      <div className="watermark">AGENCY</div>

      <HeroHeader />
      <Ticker />

      <main className={styles.mainContainer}>
        {error && <div className={styles.errorMessage}>{error}</div>}

        <div className={styles.layoutGrid}>
          <section className={styles.formSection}>
            <div className={styles.sectionTitleWrap}>
              <h2 className={styles.sectionTitle}>Registration</h2>
              <div className={styles.thinRule}></div>
            </div>
            <UserForm onSubmit={handleCreateUser} />
          </section>

          <section className={styles.tableSection}>
            <div className={styles.sectionTitleWrap}>
              <h2 className={styles.sectionTitle}>Directory</h2>
              <div className={styles.thinRule}></div>
            </div>
            {loading ? (
              <div className={styles.loading}>Gathering records<span>.</span><span>.</span><span>.</span></div>
            ) : (
              <UserTable
                users={users}
                onUpdate={handleUpdateUser}
                onDelete={handleDeleteUser}
              />
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
