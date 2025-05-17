import React, { useState } from 'react';
import { FaHeartbeat, FaAppleAlt, FaBrain, FaRunning, FaMedal } from 'react-icons/fa';

const ArogyaAniKalyan = () => {
  const [activeTab, setActiveTab] = useState('yoga');

  // Health tips data in Marathi
  const healthData = {
    yoga: {
      title: 'योग आणि व्यायाम',
      content: [
        'प्रतिदिन सकाळी १५ मिनिटे सूर्यनमस्कार करा - हे संपूर्ण शरीरासाठी उत्तम व्यायाम आहे',
        'श्वासोच्छ्वासाच्या व्यायामांनी मानसिक ताण कमी करा',
        'शाळेतील योग शिबिरांमध्ये नियमित सहभागी व्हा',
        'मुद्रा सुधारण्यासाठी ताठर बसणे आणि उभे राहणे शिका'
      ],
      video: 'https://www.youtube.com/watch?v=gv-PsU4SP8k&pp=ygUseW9nYSBtYXJhdGhpIHZpZGVvcyBmb3IgaGlnaCBzY2hvb2wgc3R1ZGVudHM%3D'
    },
    nutrition: {
      title: 'पोषण आहार',
      content: [
        'दररोज भरपूर प्रमाणात पाणी प्या (किमान ८ ग्लास)',
        'ताजे फळे, भाज्या आणि ड्राय फ्रूट्स नाश्त्यात समाविष्ट करा',
        'जंक फूडपेक्षा घरचे पौष्टिक खाद्यपदार्थ प्राधान्य द्या',
        'लहान मुलांसाठी दुधाचे सेवन महत्त्वाचे'
      ],
      image: 'https://gumlet.assettype.com/downtoearth-hindi%2F2024-09-03%2F5kzt4fe0%2Fi-stock-Micronutrients2.jpg?format=auto'
    },
    mentalHealth: {
      title: 'मानसिक आरोग्य',
      content: [
        'तणाव कमी करण्यासाठी ध्यान धरा',
        'दररोज किमान ७-८ तास झोप घ्या',
        'आपल्या भावना शिक्षक किंवा पालकांशी सामायिक करा',
        'सकारात्मक विचार करण्याचा सराव करा'
      ],
      tips: [
        'मित्रांसोबत वेळ घालवा',
        'आवडती क्रियाकलाप करा',
        'शाळेतील मनोवैज्ञानिकाशी संपर्क साधा'
      ]
    },
    // activities: {
    //   title: 'शाळेतील कल्याण कार्यक्रम',
    //   events: [
    //     { date: '१५ ऑगस्ट', name: 'धाव स्पर्धा - फिट इंडिया मूव्हमेंट' },
    //     { date: '२ सप्टेंबर', name: 'पोषण आहार कार्यशाळा' },
    //     { date: '१० ऑक्टोबर', name: 'मानसिक आरोग्य जागृती दिन' },
    //     { date: '२५ नोव्हेंबर', name: 'योग शिबिर' }
    //   ]
    // },
    // achievements: {
    //   title: 'आरोग्य क्षेत्रातील कामगिरी',
    //   students: [
    //     { name: 'राज शर्मा', achievement: 'जिल्हा स्तरावर धाव स्पर्धा विजेता' },
    //     { name: 'प्रिया पाटील', achievement: 'योगासन स्पर्धेत प्रथम क्रमांक' },
    //     { name: 'आदर्श विद्यालय', achievement: 'सर्वोत्तम आरोग्य शिक्षण पुरस्कार' }
    //   ]
    // }
  };

  return (
    <div className="arogya-kalyan" style={{
      fontFamily: "'Mukta', sans-serif",
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px'
    }}>
      <h2 style={{
        color: '#2e7d32',
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        fontWeight: '700'
      }}>
        <FaHeartbeat style={{ marginRight: '10px' }} />
        आरोग्य आणि कल्याण
      </h2>

      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        {Object.keys(healthData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 15px',
              margin: '5px',
              backgroundColor: activeTab === tab ? '#2e7d32' : '#81c784',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.3s'
            }}
          >
            {healthData[tab].title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        minHeight: '400px'
      }}>
        {/* Yoga & Exercise Tab */}
        {activeTab === 'yoga' && (
          <div>
            <h3 style={{ color: '#388e3c', marginBottom: '15px' }}>
              <FaRunning style={{ marginRight: '10px' }} />
              {healthData.yoga.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{ color: '#43a047' }}>उपयुक्त टिप्स:</h4>
                <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
                  {healthData.yoga.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{ color: '#43a047' }}>शैक्षणिक व्हिडिओ:</h4>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%', /* 16:9 */
                  height: '0',
                  overflow: 'hidden',
                  borderRadius: '8px'
                }}>
                  <iframe 
                    src={healthData.yoga.video} 
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }} 
                    allowFullScreen
                    title="Yoga video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Nutrition Tab */}
        {activeTab === 'nutrition' && (
          <div>
            <h3 style={{ color: '#388e3c', marginBottom: '15px' }}>
              <FaAppleAlt style={{ marginRight: '10px' }} />
              {healthData.nutrition.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{ color: '#43a047' }}>आहार संबंधी सूचना:</h4>
                <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
                  {healthData.nutrition.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <img 
                  src={healthData.nutrition.image} 
                  alt="पोषण आहार" 
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Mental Health Tab */}
        {activeTab === 'mentalHealth' && (
          <div>
            <h3 style={{ color: '#388e3c', marginBottom: '15px' }}>
              <FaBrain style={{ marginRight: '10px' }} />
              {healthData.mentalHealth.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{ color: '#43a047' }}>मूलभूत सूचना:</h4>
                <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
                  {healthData.mentalHealth.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{ color: '#43a047' }}>तणाव कमी करण्याचे उपाय:</h4>
                <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
                  {healthData.mentalHealth.tips.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div style={{
                  backgroundColor: '#e8f5e9',
                  padding: '15px',
                  borderRadius: '8px',
                  marginTop: '20px'
                }}>
                  <p style={{ fontWeight: '600', color: '#2e7d32' }}>
                    आपीयत (APJIT) हेल्पलाइन: <span style={{ color: '#1b5e20' }}>१८००-१२३-४५६</span>
                  </p>
                  <p>मानसिक आरोग्यासाठी २४x7 मदत</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* School Activities Tab */}
        {/* {activeTab === 'activities' && (
          <div>
            <h3 style={{ color: '#388e3c', marginBottom: '15px' }}>
              <FaMedal style={{ marginRight: '10px' }} />
              {healthData.activities.title}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {healthData.activities.events.map((event, index) => (
                <div key={index} style={{
                  backgroundColor: '#e8f5e9',
                  padding: '15px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ color: '#2e7d32', marginBottom: '5px' }}>{event.date}</h4>
                  <p style={{ fontSize: '16px' }}>{event.name}</p>
                  <button style={{
                    marginTop: '10px',
                    padding: '5px 10px',
                    backgroundColor: '#43a047',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    अधिक माहिती
                  </button>
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Achievements Tab */}
        {/* {activeTab === 'achievements' && (
          <div>
            <h3 style={{ color: '#388e3c', marginBottom: '15px' }}>
              <FaMedal style={{ marginRight: '10px' }} />
              {healthData.achievements.title}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {healthData.achievements.students.map((student, index) => (
                <div key={index} style={{
                  backgroundColor: '#e8f5e9',
                  padding: '15px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ color: '#2e7d32', marginBottom: '5px' }}>{student.name}</h4>
                  <p style={{ fontSize: '16px' }}>{student.achievement}</p>
                  <button style={{
                    marginTop: '10px',
                    padding: '5px 10px',
                    backgroundColor: '#43a047',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    छायाचित्र पहा
                  </button>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>

      {/* Footer Note */}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        color: '#666',
        fontSize: '14px'
      }}>
        {/* <p>आरोग्य संबंधी अधिक माहितीसाठी शाळेच्या आरोग्य केंद्राशी संपर्क साधा</p>
        <p>दर शुक्रवारी सकाळी ८ ते १० वाजेपर्यंत वैद्यकीय तपासणी</p> */}
      </div>
    </div>
  );
};

export default ArogyaAniKalyan;