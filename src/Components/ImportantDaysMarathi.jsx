import React, { useState, useEffect } from 'react';

const ImportantDaysMarathi = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [randomThought, setRandomThought] = useState('');

  // Important days data (Marathi)
  const importantDays = [
    {
      id: 1,
      name: 'शिक्षक दिन',
      date: new Date(currentDate.getFullYear(), 8, 5), // September 5
      image: 'https://example.com/teacher-day.jpg',
      information: 'डॉ. सर्वपल्ली राधाकृष्णन यांच्या जयंतीनिमित्त ५ सप्टेंबर रोजी शिक्षक दिन साजरा केला जातो. हा दिवस शिक्षकांच्या समाजातील योगदानाला वाहिलेला असतो.'
    },
    {
      id: 2,
      name: 'बाल दिन',
      date: new Date(currentDate.getFullYear(), 10, 14), // November 14
      image: 'https://example.com/children-day.jpg',
      information: 'पंडित जवाहरलाल नेहरू यांच्या जयंतीनिमित्त १४ नोव्हेंबर रोजी बाल दिन साजरा केला जातो. नेहरूंना मुलांचे प्रेम लाभले होते, म्हणून त्यांच्या जन्मदिवसाला बाल दिन म्हणून साजरा करण्यात येतो.'
    },
    {
      id: 3,
      name: 'स्वातंत्र्य दिन',
      date: new Date(currentDate.getFullYear(), 7, 15), // August 15
      image: 'https://example.com/independence-day.jpg',
      information: '१५ ऑगस्ट १९४७ रोजी भारताने ब्रिटिश राजवटीपासून स्वातंत्र्य मिळवले. हा दिवस देशभरात राष्ट्रीय सण म्हणून साजरा केला जातो.'
    },
    {
      id: 4,
      name: 'गणतंत्र दिन',
      date: new Date(currentDate.getFullYear(), 0, 26), // January 26
      image: 'https://example.com/republic-day.jpg',
      information: '२६ जानेवारी १९५० रोजी भारताचे संविधान अस्तित्वात आले. हा दिवस देशभरात उत्साहात साजरा केला जातो.'
    },
    {
      id: 5,
      name: 'महिला दिन',
      date: new Date(currentDate.getFullYear(), 2, 8), // March 8
      image: 'https://example.com/womens-day.jpg',
      information: '८ मार्च रोजी आंतरराष्ट्रीय महिला दिन साजरा केला जातो. हा दिवस महिलांच्या सामाजिक, आर्थिक, सांस्कृतिक आणि राजकीय यशाचा सन्मान करतो.'
    },
    // Today's date as a special entry
    {
      id: 6,
      name: 'आजचा दिवस',
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()),
      image: 'https://cdn.cdnparenting.com/articles/2023/08/05200304/Teachers-Day-History-Importance-and-Celebration-Ideas-of-Shikshak-Din-768x525.jpg',
      information: `आज ${currentDate.toLocaleDateString('mr-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} आहे. हा दिवस विशेष बनवणे तुमच्या हातात आहे!`
    }
  ];

  // Marathi thoughts
  const marathiThoughts = [
    "जीवनातील छोट्या छोट्या गोष्टींमध्ये आनंद शोधा.",
    "प्रयत्न करत राहा, यश नक्कीच मिळेल.",
    "सकारात्मक विचारांनी मन प्रसन्न ठेवा.",
    "इतरांच्या मदतीला सदैव तयार राहा.",
    "आपल्या कर्तृत्वावर विश्वास ठेवा.",
    "प्रत्येक दिवस नवीन संधी घेऊन येतो.",
    "स्वतःवर प्रेम करा, कारण तुम्ही विशेष आहात."
  ];

  // Check if today is an important day (excluding the "today" entry)
  const todayImportantDay = importantDays.find(day => 
    (day.date.getDate() === currentDate.getDate() && 
     day.date.getMonth() === currentDate.getMonth() &&
     day.id !== 6) // Exclude the "today" entry from this check
  );

  // Set random thought when no important day
  useEffect(() => {
    if (!todayImportantDay) {
      const randomIndex = Math.floor(Math.random() * marathiThoughts.length);
      setRandomThought(marathiThoughts[randomIndex]);
    }
  }, [currentDate]);

  // Update date daily
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 86400000); // Update every 24 hours

    return () => clearInterval(timer);
  }, []);

  // Get today's special entry (id:6)
  const todaysSpecial = importantDays.find(day => day.id === 6);

  return (
    <div className="important-days-container" style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: "'Mukta', 'Arial', sans-serif",
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>महत्त्वाचे दिवस</h2>
      
      {/* Always show today's date card at the top */}
      <div className="todays-date-card" style={{
        backgroundColor: '#e3f2fd',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ color: '#0d47a1', marginBottom: '10px' }}>{todaysSpecial.name}</h3>
        <img 
          src={todaysSpecial.image} 
          alt={todaysSpecial.name}
          style={{ 
            width: '100%', 
            maxHeight: '200px', 
            objectFit: 'cover', 
            borderRadius: '8px',
            marginBottom: '10px'
          }}
        />
        <p style={{ 
          color: '#1a237e', 
          lineHeight: '1.5',
          fontSize: '15px'
        }}>
          {todaysSpecial.information}
        </p>
      </div>

      {/* Show important day or random thought below */}
      {todayImportantDay ? (
        <div className="important-day-card" style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>{todayImportantDay.name}</h3>
          <img 
            src={todayImportantDay.image} 
            alt={todayImportantDay.name}
            style={{ 
              width: '100%', 
              maxHeight: '300px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              marginBottom: '15px'
            }}
          />
          <p style={{ 
            color: '#34495e', 
            lineHeight: '1.6',
            fontSize: '16px'
          }}>
            {todayImportantDay.information}
          </p>
        </div>
      ) : (
        <div className="thought-card" style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          padding: '30px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#3498db', marginBottom: '15px' }}>मनोगत</h3>
          <p style={{ 
            fontStyle: 'italic', 
            fontSize: '18px',
            color: '#2c3e50',
            lineHeight: '1.6'
          }}>
            {randomThought}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImportantDaysMarathi;