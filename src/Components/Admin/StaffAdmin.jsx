import { useState, useEffect } from 'react';
import { FaChalkboardTeacher, FaUserTie, FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import { collection, addDoc, doc, deleteDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../../firebase';
import './StaffAdmin.css';

const StaffAdmin = () => {
  const [staffType, setStaffType] = useState('leadership');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [photo, setPhoto] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);
  
  const [leadership, setLeadership] = useState([]);
    const [teachingStaff, setTeachingStaff] = useState([]);
    const [otherStaff,setotherStaff]=useState([])

  // Fetch staff data in real-time
  useEffect(() => {
    const unsubscribeLeadership = onSnapshot(collection(db, 'leadership'), (snapshot) => {
      setLeadership(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    
    const unsubscribeTeaching = onSnapshot(collection(db, 'teachingStaff'), (snapshot) => {
      setTeachingStaff(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
      
          const unsubscribeOtherStaff = onSnapshot(collection(db, 'otherStaff'), (snapshot) => {
            setotherStaff(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
          });

    return () => {
      unsubscribeLeadership();
        unsubscribeTeaching();
        unsubscribeOtherStaff()
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !role) return;

    setUploading(true);
    try {
      let photoUrl = 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png';
      
      // Upload photo if provided
      if (photo) {
        const storageRef = ref(storage, `staff-photos/${photo.name}`);
        const snapshot = await uploadBytes(storageRef, photo);
        photoUrl = await getDownloadURL(snapshot.ref);
      }

      const staffData = { name, role, photo: photoUrl };

      if (editingId) {
        // Update existing staff
        await updateDoc(doc(db, staffType, editingId), staffData);
        setEditingId(null);
      } else {
        // Add new staff
        await addDoc(collection(db, staffType), staffData);
      }

      // Reset form
      setName('');
      setRole('');
      setPhoto(null);
    } catch (error) {
      console.error("Error saving staff:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (staff) => {
    setName(staff.name);
    setRole(staff.role);
    setEditingId(staff.id);
  };

  const handleDelete = async (id, collectionName, photoUrl) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      try {
        await deleteDoc(doc(db, collectionName, id));
        // Delete photo if it's not the default
        if (!photoUrl.includes('ibb.co')) {
          const photoRef = ref(storage, photoUrl);
          await deleteObject(photoRef);
        }
      } catch (error) {
        console.error("Error deleting staff:", error);
      }
    }
  };

  return (
    <div className="staff-admin-container">
      <div className="admin-header">
        <h4>
          <FaChalkboardTeacher className="icon" /> Staff Management
        </h4>
        <p>Add, edit or remove staff members</p>
      </div>

      <div className="staff-type-toggle">
        <button
          className={staffType === 'leadership' ? 'active' : ''}
          onClick={() => setStaffType('leadership')}
        >
          <FaUserTie /> Leadership
        </button>
        <button
          className={staffType === 'teachingStaff' ? 'active' : ''}
          onClick={() => setStaffType('teachingStaff')}
        >
          <FaChalkboardTeacher /> Teaching Staff
              </button>
                      <button
          className={staffType === 'otherStaff' ? 'active' : ''}
          onClick={() => setStaffType('otherStaff')}
        >
          <FaChalkboardTeacher />  Add शैक्षणिक विविध समिती
        </button>
      </div>

      <form onSubmit={handleSubmit} className="staff-form">
        <div className="form-group">
          <label>{staffType === 'leadership' ? 'Leader Name' : 'Teacher Name'}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={staffType === 'leadership' ? 'E.g.: श्री. हरिदास किसन भुरे' : 'E.g.: श्री. सुरेंद्र एस. गिऱ्हेपुजे'}
            required
          />
        </div>

        <div className="form-group">
          <label>Role/Position</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder={staffType === 'leadership' ? 'E.g.: मुख्याध्यापक' : 'E.g.: कनिष्ठ लिपीक'}
            required
          />
        </div>

        <div className="form-group">
          <label>Photo (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>

        <button type="submit" disabled={uploading}>
          {uploading ? 'Saving...' : editingId ? 'Update' : 'Add'} {staffType === 'leadership' ? 'Leader' : 'Staff'}
        </button>
      </form>

      <div className="staff-lists">
        {/* Leadership List */}
        {staffType === 'leadership' && (
          <div className="staff-section">
            <h3>
              <FaUserTie className="section-icon" /> शाळा नेतृत्व ({leadership.length})
            </h3>
            {leadership.length === 0 ? (
              <p>No leadership members added yet</p>
            ) : (
              <div className="staff-grid">
                {leadership.map(leader => (
                  <div key={leader.id} className="staff-card">
                    <div className="staff-photo">
                      <img src={leader.photo} alt={leader.name} />
                    </div>
                    <div className="staff-details">
                      <h4>{leader.name}</h4>
                      <p>{leader.role}</p>
                      <div className="staff-actions">
                        <button onClick={() => handleEdit(leader)}>
                          <FaEdit /> Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(leader.id, 'leadership', leader.photo)}
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
        )}

        {/* Teaching Staff List */}
        {staffType === 'teachingStaff' && (
          <div className="staff-section">
            <h3>
              <FaChalkboardTeacher className="section-icon" /> कर्मचारी वृंद ({teachingStaff.length})
            </h3>
            {teachingStaff.length === 0 ? (
              <p>No teaching staff added yet</p>
            ) : (
              <div className="staff-grid">
                {teachingStaff.map(teacher => (
                  <div key={teacher.id} className="staff-card">
                    <div className="staff-photo">
                      <img src={teacher.photo} alt={teacher.name} />
                    </div>
                    <div className="staff-details">
                      <h4>{teacher.name}</h4>
                      <p>{teacher.role}</p>
                      <div className="staff-actions">
                        <button onClick={() => handleEdit(teacher)}>
                          <FaEdit /> Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(teacher.id, 'teachingStaff', teacher.photo)}
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
              )}
              
                {/* Teaching Staff List */}
        {staffType === 'otherStaff' && (
          <div className="staff-section">
            <h3>
              <FaChalkboardTeacher className="section-icon" /> शैक्षणिक विविध समिती ({otherStaff.length})
            </h3>
            {otherStaff.length === 0 ? (
              <p>No शैक्षणिक विविध समिती added yet</p>
            ) : (
              <div className="staff-grid">
                {otherStaff.map(teacher => (
                  <div key={teacher.id} className="staff-card">
                    <div className="staff-photo">
                      <img src={teacher.photo} alt={teacher.name} />
                    </div>
                    <div className="staff-details">
                      <h4>{teacher.name}</h4>
                      <p>{teacher.role}</p>
                      <div className="staff-actions">
                        <button onClick={() => handleEdit(teacher)}>
                          <FaEdit /> Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(teacher.id, 'otherStaff', teacher.photo)}
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
        )}
      </div>
    </div>
  );
};

export default StaffAdmin;