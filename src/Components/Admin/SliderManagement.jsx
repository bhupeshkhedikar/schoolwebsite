import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import './SliderManagement.css';

const SliderManagement = () => {
  const [slides, setSlides] = useState([]);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'multiple'

  // Fetch slides in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'slides'), (snapshot) => {
      const slidesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSlides(slidesList);
    });
    return () => unsubscribe();
  }, []);

  const handleImageChange = (e) => {
    if (uploadMode === 'single') {
      setImages([e.target.files[0]]);
    } else {
      setImages(Array.from(e.target.files));
    }
  };

  const uploadSingleImage = async (image) => {
    const storageRef = ref(storage, `slider-images/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    await addDoc(collection(db, 'slides'), {
      image: downloadURL,
      title,
      description,
      createdAt: new Date()
    });
  };

  const uploadMultipleImages = async () => {
    const uploadPromises = images.map(async (image) => {
      const storageRef = ref(storage, `slider-images/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      return addDoc(collection(db, 'slides'), {
        image: downloadURL,
        title: `Slide ${slides.length + 1}`,
        description: '',
        createdAt: new Date()
      });
    });

    await Promise.all(uploadPromises);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (images.length === 0) return;

    setUploading(true);
    try {
      if (uploadMode === 'single') {
        await uploadSingleImage(images[0]);
      } else {
        await uploadMultipleImages();
      }

      // Reset form
      setTitle('');
      setDescription('');
      setImages([]);
    } catch (error) {
      console.error("Error uploading images: ", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id, imageUrl) => {
    try {
      await deleteDoc(doc(db, 'slides', id));
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    } catch (error) {
      console.error("Error deleting slide: ", error);
    }
  };

  return (
    <div className="admin-panel">
      <h4 style={{textAlign:'center',margin:'10px'}}>Slider Image Management</h4>
      
      <div className="upload-mode-toggle">
        <button
          className={uploadMode === 'single' ? 'active' : ''}
          onClick={() => setUploadMode('single')}
        >
          Single Upload
        </button>
        <button
          className={uploadMode === 'multiple' ? 'active' : ''}
          onClick={() => setUploadMode('multiple')}
        >
          Multiple Upload
        </button>
      </div>

      <form onSubmit={handleUpload} className="upload-form">
        <div className="file-input-container">
          <label htmlFor="slider-images">
            {uploadMode === 'single' ? 'Choose Image' : 'Choose Images'}
          </label>
          <input
            id="slider-images"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple={uploadMode === 'multiple'}
            required
          />
          {images.length > 0 && (
            <div className="selected-files">
              {uploadMode === 'single' ? (
                <span>{images[0].name}</span>
              ) : (
                <span>{images.length} files selected</span>
              )}
            </div>
          )}
        </div>

        {uploadMode === 'single' && (
          <>
            <input
              type="text"
              placeholder="Image Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Image Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </>
        )}

        <button type="submit" disabled={uploading || images.length === 0}>
          {uploading ? 'Uploading...' : `Upload ${uploadMode === 'single' ? 'Image' : 'Images'}`}
        </button>
      </form>

      <div className="slides-list">
        <h3>Current Slides ({slides.length})</h3>
        <div className="slides-grid">
          {slides.map(slide => (
            <div key={slide.id} className="slide-item">
              <img src={slide.image} alt={slide.title} />
              <div className="slide-info">
                <h4>{slide.title}</h4>
                <p>{slide.description}</p>
                <button 
                  onClick={() => handleDelete(slide.id, slide.image)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderManagement;