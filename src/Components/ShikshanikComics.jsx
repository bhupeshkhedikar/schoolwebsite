import React, { useState, useEffect } from 'react';

const ShikshanikComics = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  // 20 Moral Stories in Marathi with image URLs
  const moralStories = [
    {
      id: 1,
      title: "कावळा आणि पाणी",
      image: "https://cdn.firstcry.com/education/2022/09/05180936/shutterstock_1705589518.jpg",
      content: "एका कावळ्याला खूप तहान लागली होती. त्याला एका घागरीत थोडे पाणी दिसले परंतु ते खाली पोहोचू शकत नव्हते. त्याने चतुराईने चिखलातील काटे घागरीत टाकले आणि पाणी वर आले. शिक्षण: समस्या सोडवण्यासाठी बुद्धी ही शक्ती आहे."
    },
    {
      id: 2,
      title: "सोन्याची अंडी देणारी कोंबडी",
      image: "https://i.ytimg.com/vi/-qJAmjvglbs/maxresdefault.jpg",
      content: "एका शेतकऱ्याला एक कोंबडी मिळाली जी रोज सोन्याची अंडी देई. लोभाने त्याने कोंबडी मारून पाहिली परंतु आत काहीच नव्हते. शिक्षण: लोभामुळे सध्याचेही हातचे जाते."
    },
    {
      id: 3,
      title: "उंदीर आणि शेळी",
      image: "https://uttaranchaltimes.com/wp-content/uploads/2020/08/tips-to-goat-farming-business-uttarakhand.jpg",
      content: "एका उंदिराने शेळीला दुधात बुडताना पाहिले. तिने मदतीची विनंती केली परंतु उंदिर म्हणाला, 'तू माझा शत्रू आहेस'. शेळी म्हणाली, 'संकटकाळात शत्रू-मित्र भेद नसतो'. शिक्षण: संकटकाळी सर्व मदतीला योग्य असतात."
    },
    {
      id: 4,
      title: "लांडगा आणि बकरी",
      image: "https://i.ytimg.com/vi/YoYchch6Y6M/maxresdefault.jpg",
      content: "एका लांडग्याने बकरीला नदीकाठी पाहिले. त्याने तिला पाणी विषारी आहे असे सांगितले. बकरी समजूतदार होती आणि त्याच्या फसवणुकीत न पडता तिच्या मार्गाने निघून गेली. शिक्षण: शत्रूच्या सल्ल्यावर विश्वास ठेवू नका."
    },
    {
      id: 5,
      title: "मुंगूस आणि साप",
      image: "https://littleauthors.in/wp-content/uploads/2023/01/loyalmongoose.jpg",
      content: "एका माणसाने मुंगसाला सापापासून वाचवले. एक दिवस मुंगूसाने साप मारला परंतु माणूस त्याच्या रक्ताने भरलेला पाहून चुकीचा अर्थ लावला आणि मुंगसाला मारले. शिक्षण: घाईचे निर्णय नेहमी चुकीचे असतात."
    },
    {
      id: 6,
      title: "हत्ती आणि उंदीर",
      image: "https://marathi.grptechs.com/wp-content/uploads/2024/05/Elephant.jpg",
      content: "एका उंदिराने हत्तीला रस्त्यात अडकलेल्या पाहिले. त्याने हत्तीच्या सोंडेला चावून तिथून बाहेर काढले. काही दिवसांनंतर उंदीर जाळ्यात अडकला तेव्हा हत्तीने त्याला वाचवले. शिक्षण: उपकाराची फेड करावी."
    },
    {
      id: 7,
      title: "कोल्हा आणि द्राक्षे",
      image: "https://cdn.cdnparenting.com/articles/2023/05/26122838/The-Fox-and-The-Grapes-Story-1090493522-1024x700-1.webp",
      content: "एका कोल्ह्याला द्राक्षांची एक वेल दिसली परंतु ती फार उंच होती. तो ती खाऊ शकला नाही म्हणून म्हणाला, 'ती द्राक्षे आंबट आहेत'. शिक्षण: न मिळालेल्या गोष्टीबद्दल निंदा करणे सोपे असते."
    },
    {
      id: 8,
      title: "सिंह आणि उंदीर",
      image: "https://i.ytimg.com/vi/2a8SmxVIv1c/maxresdefault.jpg",
      content: "एका सिंहाने उंदिराला सोडून दिले. काही दिवसांनंतर उंदिराने सिंहाला जाळ्यातून मुक्त केले. शिक्षण: छोट्यांनाही मोठी मदत करता येते."
    },
    {
      id: 9,
      title: "माशा मारणारा आणि साप",
      image: "https://example.com/comics/masha-sap.jpg",
      content: "एका माणसाने सापाला गारठ्यात गोठलेले पाहिले. त्याने तो उचलून छातीवर ठेवला. साप बरा झाल्यावर त्याने माणसाला चावले. शिक्षण: दुष्टाची मदत केल्यास तोच हानी करतो."
    },
    {
      id: 10,
      title: "गवताळ आणि झाड",
      image: "https://example.com/comics/gavatal-zad.jpg",
      content: "गवताळाने झाडाला म्हटले, 'तू का इतके मोठे आहेस? मी तुझ्यापेक्षा चांगला कारण वारा वाहतो तेव्हा मी झुकतो पण तू मोडतोस'. एक दिवस वादळ आले आणि झाड मोडले पण गवत वाचले. शिक्षण: नम्रता ही शक्ती आहे."
    },
    {
      id: 11,
      title: "सोनेरी अंडी",
      image: "https://example.com/comics/soner-andi.jpg",
      content: "एका गरीब माणसाला एक कोंबडी मिळाली जी रोज सोन्याची अंडी देई. लोभाने त्याने कोंबडी मारून पाहिली परंतु आत काहीच नव्हते. शिक्षण: लोभामुळे सर्वच हातचे जाते."
    },
    {
      id: 12,
      title: "बैल आणि बेडूक",
      image: "https://example.com/comics/bail-beduk.jpg",
      content: "एका बेडकाने मोठा बैल पाहिला आणि आपणही त्याच्यासारखा मोठा व्हावा असे ठरवले. तो फुगतच गेला आणि शेवटी फुटून गेला. शिक्षण: स्वतःच्या मर्यादा ओळखाव्यात."
    },
    {
      id: 13,
      title: "कबुतर आणि चित्रकार",
      image: "https://example.com/comics/kabutar-chitrakar.jpg",
      content: "एका चित्रकाराने कबुतराचे चित्र काढले. कबुतर म्हणाला, 'माझे पाय सुंदर नाहीत म्हणून ते काढू नका'. चित्रकाराने तसे केले. पक्ष्यांनी हसून म्हटले, 'पाय नसलेला कबुतर कसा उडेल?' शिक्षण: दोष शोधण्यापेक्षा गुण पाहा."
    },
    {
      id: 14,
      title: "मासा आणि माकड",
      image: "https://example.com/comics/masa-makad.jpg",
      content: "एका माकडाने नदीत मासे पाहिले आणि त्यांना झाडावर चढायला सांगितले. मासे म्हणाले, 'प्रत्येकाला त्याच्या वातावरणातच यश मिळते'. शिक्षण: स्वतःच्या क्षमतेनुसारच काम करावे."
    },
    {
      id: 15,
      title: "गरुड आणि कावळा",
      image: "https://example.com/comics/garud-kawala.jpg",
      content: "एका कावळ्याने गरुडाला पाहिले आणि त्याच्यासारखा उंच उडायचे ठरवले. परंतु तो थकून खाली पडला. शिक्षण: इतरांची नक्कल करू नका, स्वतःचे सामर्थ्य ओळखा."
    },
    {
      id: 16,
      title: "सिंह आणि हरिण",
      image: "https://example.com/comics/sinh-harin.jpg",
      content: "एका सिंहाने हरिण पकडले. हरिण म्हणाला, 'मी तुमचा राजा आहे असे सर्वांना सांगेन'. सिंह म्हणाला, 'जा सांग'. हरिण सुटून गेला आणि पळून गेला. शिक्षण: शहाणपणाने संकटांतून सुटका करता येते."
    },
    {
      id: 17,
      title: "मुंगूस आणि सर्प",
      image: "https://littleauthors.in/wp-content/uploads/2023/01/loyalmongoose.jpg",
      content: "एका माणसाने मुंगसाला सर्पापासून वाचवले. एक दिवस मुंगूसाने सर्प मारला परंतु माणूस त्याच्या रक्ताने भरलेला पाहून चुकीचा अर्थ लावला आणि मुंगसाला मारले. शिक्षण: घाईचे निर्णय नेहमी चुकीचे असतात."
    },
    {
      id: 18,
      title: "उंदीर आणि शेळी",
      image: "https://example.com/comics/undir-shela-2.jpg",
      content: "एका उंदिराने शेळीला दुधात बुडताना पाहिले. तिने मदतीची विनंती केली परंतु उंदिर म्हणाला, 'तू माझा शत्रू आहेस'. शेळी म्हणाली, 'संकटकाळात शत्रू-मित्र भेद नसतो'. शिक्षण: संकटकाळी सर्व मदतीला योग्य असतात."
    },
    {
      id: 19,
      title: "कावळा आणि मोत्ये",
      image: "https://media.assettype.com/esakal%2Fimport%2Fs3fs-public%2Fnews-story%2Fcover-images%2F3mukta_1_0.jpg?w=480&auto=format%2Ccompress&fit=max",
      content: "एका कावळ्याला मोत्यांचा हार मिळाला. तो त्याला राजाला देणार होता पण रस्त्यात लोकांनी त्याला हसले. शेवटी तो हार एका गरीब मुलीला दिला. शिक्षण: मूल्यवान वस्तू योग्य व्यक्तीकडेच जाव्यात."
    },
    {
      id: 20,
      title: "बेडूक आणि साप",
      image: "https://i.ytimg.com/vi/Llr8jNGphNU/maxresdefault.jpg",
      content: "दोन बेडुकांनी सापाला आपला राजा म्हणून निवडले. सापाने रोज एक बेडूक खाऊन टाकला. शेवटी बेडुक समजले की, 'शत्रूला सत्ता देणे म्हणजे आत्महत्या करणे'. शिक्षण: दुष्टांवर विश्वास ठेवू नका."
    }
  ];

  // Set story based on day of month (1-20)
  useEffect(() => {
    const dayOfMonth = currentDate.getDate();
    const storyIndex = (dayOfMonth % 20) - 1; // Cycle through 20 stories
    setCurrentStoryIndex(storyIndex >= 0 ? storyIndex : 19);
  }, [currentDate]);

  // Update date daily
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 86400000); // Update every 24 hours

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="shikshanik-comics" style={{
      fontFamily: "'Mukta', sans-serif",
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff9e6',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#d35400',
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '28px',
        borderBottom: '2px solid #f39c12',
        paddingBottom: '10px'
      }}>
        शैक्षणिक कॉमिक्स: नैतिक कथा आणि बोधकथा
      </h2>

      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{
          color: '#e67e22',
          textAlign: 'center',
          fontSize: '22px',
          marginBottom: '15px'
        }}>
          {moralStories[currentStoryIndex].title}
        </h3>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src={moralStories[currentStoryIndex].image} 
              alt={moralStories[currentStoryIndex].title}
              style={{
                width: '100%',
                borderRadius: '8px',
                border: '3px solid #f1c40f',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{
              lineHeight: '1.8',
              fontSize: '16px',
              color: '#34495e',
              textAlign: 'justify'
            }}>
              {moralStories[currentStoryIndex].content}
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: '#fdebd0',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <h4 style={{
            color: '#d35400',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '24px' }}>💡</span> शिक्षण / नैतिक
          </h4>
          <p style={{
            fontWeight: 'bold',
            color: '#e67e22',
            fontStyle: 'italic',
            fontSize: '16px'
          }}>
            {moralStories[currentStoryIndex].content.split('शिक्षण:')[1]}
          </p>
        </div>
      </div>

      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        color: '#7f8c8d',
        fontSize: '14px'
      }}>
        <p>दररोज एक नवीन नैतिक कथा तुमच्यासाठी! उद्या पुन्हा भेटू!</p>
        <p>आजची तारीख: {currentDate.toLocaleDateString('mr-IN')}</p>
      </div>
    </div>
  );
};

export default ShikshanikComics;