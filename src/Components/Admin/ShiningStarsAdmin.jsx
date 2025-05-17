import { useState, useEffect } from 'react';
import { FaStar, FaTrophy, FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import { collection, addDoc, doc, deleteDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../../firebase';
import './ShiningStarsAdmin.css';

const ShiningStarsAdmin = () => {
  const [toppers, setToppers] = useState([]);
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [position, setPosition] = useState(1);
  const [achievement, setAchievement] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch toppers in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'toppers'), (snapshot) => {
      const toppersList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Sort by position
      setToppers(toppersList.sort((a, b) => a.position - b.position));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !studentClass || !position) return;

    setUploading(true);
    try {
      let imageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png';
      
      // Upload image if provided
      if (image) {
        const storageRef = ref(storage, `toppers-images/${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      if (editingId) {
        // Update existing topper
        await updateDoc(doc(db, 'toppers', editingId), {
          name,
          class: studentClass,
          position: Number(position),
          achievement,
          image: imageUrl
        });
        setEditingId(null);
      } else {
        // Add new topper
        await addDoc(collection(db, 'toppers'), {
          name,
          class: studentClass,
          position: Number(position),
          achievement,
          image: imageUrl,
          createdAt: new Date()
        });
      }

      // Reset form
      setName('');
      setStudentClass('');
      setPosition(1);
      setAchievement('');
      setImage(null);
    } catch (error) {
      console.error("Error saving topper: ", error);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (topper) => {
    setName(topper.name);
    setStudentClass(topper.class);
    setPosition(topper.position);
    setAchievement(topper.achievement);
    setEditingId(topper.id);
  };

  const handleDelete = async (id, imageUrl) => {
    if (window.confirm("Are you sure you want to delete this topper?")) {
      try {
        await deleteDoc(doc(db, 'toppers', id));
        // Delete image from storage if it's not the default avatar
        if (!imageUrl.includes('vecteezy.com')) {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        }
      } catch (error) {
        console.error("Error deleting topper: ", error);
      }
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h4>
          <FaStar className="icon" /> Manage Shining Stars <FaStar className="icon" />
        </h4>
        <p>Add, edit or remove top performing students</p>
      </div>

      <form onSubmit={handleSubmit} className="topper-form">
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Class</label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Position (1-3)</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value={1}>1st</option>
              <option value={2}>2nd</option>
              <option value={3}>3rd</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Achievement</label>
          <input
            type="text"
            value={achievement}
            onChange={(e) => setAchievement(e.target.value)}
            placeholder="e.g. School Topper (98.6%)"
          />
        </div>

        <div className="form-group">
          <label>Student Photo (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" disabled={uploading}>
          {uploading ? 'Saving...' : editingId ? 'Update Topper' : 'Add Topper'}
        </button>
      </form>

      <div className="toppers-list">
        <h3>Current Toppers ({toppers.length})</h3>
        {toppers.length === 0 ? (
          <p>No toppers added yet</p>
        ) : (
          <div className="toppers-grid">
            {toppers.map(topper => (
              <div key={topper.id} className="topper-card">
                <div className="topper-image">
                  <img src={topper.image} alt={topper.name} />
                  <div className={`trophy-badge trophy-${topper.position}`}>
                    <FaTrophy />
                    <span className="position-number">{topper.position}</span>
                  </div>
                </div>
                <div className="topper-details">
                  <h4>{topper.name}</h4>
                  <p>Class: {topper.class}</p>
                  <p>{topper.achievement}</p>
                  <div className="topper-actions">
                    <button onClick={() => handleEdit(topper)}>
                      <FaEdit /> Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(topper.id, topper.image)}
                      className="delete-btn"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShiningStarsAdmin;