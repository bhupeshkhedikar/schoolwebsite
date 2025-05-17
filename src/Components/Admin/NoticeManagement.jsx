import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import './NoticeManagement.css';

const NoticeManagement = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Fetch notices in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notices'), (snapshot) => {
      const noticesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNotices(noticesList);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    if (editingId) {
      // Update existing notice
      await updateDoc(doc(db, 'notices', editingId), {
        title,
        description
      });
      setEditingId(null);
    } else {
      // Add new notice
      await addDoc(collection(db, 'notices'), {
        title,
        description,
        createdAt: new Date()
      });
    }

    setTitle('');
    setDescription('');
  };

  const handleEdit = (notice) => {
    setTitle(notice.title);
    setDescription(notice.description);
    setEditingId(notice.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'notices', id));
  };

  return (
    <div className="admin-panel">
      <h4 style={{textAlign:'center',margin:'10px'}}>Notice Board Mnagement</h4>
      
      <form onSubmit={handleSubmit} className="notice-form">
        <input
          type="text"
          placeholder="Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Notice Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">
          {editingId ? 'Update Notice' : 'Add Notice'}
        </button>
      </form>

      <div className="notices-list">
        <h3>Current Notices</h3>
        {notices.map(notice => (
          <div key={notice.id} className="notice-item" style={ {height:'200px',overflow:'scroll'}}>
            <h4>{notice.title}</h4>
            <p>{notice.description}</p>
            <div className="notice-actions">
              <button onClick={() => handleEdit(notice)}>Edit</button>
              <button onClick={() => handleDelete(notice.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeManagement;