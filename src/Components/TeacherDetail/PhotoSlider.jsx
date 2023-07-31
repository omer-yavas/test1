import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';

const PhotoSlider = ({ photoUrlArray }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex(
        (prevIndex) => (prevIndex + 1) % photoUrlArray.length
      );
    }, 2000);

    return () => {
      clearInterval(intervalId); // bileşen demonte edildiğinde zamanlayıcıyı temizle
    };
  }, [photoUrlArray.length]);

  const handlePhotoClick = (index) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div>
      {photoUrlArray.length > 0 ? (
        // <div className="grid grid-cols-1 h-[350px] ">
        <div className="grid grid-cols-1  gap-y-2">
          {/* <div className="w-[350px] relative"> */}
          <div className=" relative overflow-hidden min-[100px]:h-[200px] min-[576px]:h-[100px] min-[768px]:h-[150px] min-[992px]:h-[200px]">
            <img
              className="w-full h-auto object-cover"
              src={photoUrlArray[currentPhotoIndex]}
              alt={`Photo ${currentPhotoIndex}`}
            />
            <div
              className="flex justify-center items-center w-[24px] h-[24px] bg-[#cbd5e1] rounded-[12px] absolute inset-y-1/2 cursor-pointer"
              onClick={() => {
                setCurrentPhotoIndex(
                  (prevIndex) => (prevIndex + 1) % photoUrlArray.length
                );
              }}
            >
              <ArrowBackIcon />
            </div>
            <div
              className="flex justify-center items-center w-[24px] h-[24px] bg-[#cbd5e1] rounded-[12px] absolute inset-y-1/2 right-[5px] cursor-pointer"
              onClick={() => {
                setCurrentPhotoIndex((prevIndex) =>
                  prevIndex === 0 ? photoUrlArray.length - 1 : prevIndex - 1
                );
              }}
            >
              <ArrowForwardIcon />
            </div>
          </div>
          <div className="flex justify-center gap-x-2 ">
            {/* <div className="flex justify-center gap-x-2 max-w-[345px]"> */}
            {photoUrlArray.map((url, index) => (
              <div key={index} className=" cursor-pointer">
                <img
                  src={url}
                  // className="max-w-[75px] max-h-[50px] cursor-pointer"
                  alt={`Photo ${index}`}
                  onClick={() => handlePhotoClick(index)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-[350px] w-[350px] justify-center items-center">
          <span>Henüz Fotoğraf Yüklenmemiştir</span>
        </div>
      )}
    </div>
  );
};

export default PhotoSlider;

// const [currentIndex, setCurrentIndex] = useState(0);

//   const lengthOfArray = photoUrlArray.length;

//   // useEffect(() => {
//   //   if (photoUrlArray.length > 0) {
//   //     setCurrentPhotoUrl(photoUrlArray[0]);
//   //   }
//   // }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log(currentIndex);
//       setCurrentIndex(currentIndex + 1);
//     }, 4000);
//     return () => {
//       clearInterval(interval); // bileşen demonte edildiğinde zamanlayıcıyı temizle
//     };
//   }, []);

//   return (
//     <div className="grid grid-cols-1">
//       <div>
//         <div>
//           <img src={photoUrlArray[currentIndex]} alt="öğretmen fotoğrafı"></img>
//         </div>
//         <div>
//           <ArrowForwardIcon />
//         </div>
//         <div>
//           <ArrowBackIcon />
//         </div>
//       </div>
//       <div className="flex">
//         {photoUrlArray.map((url, index) => {
//           return (
//             <div key={index}>
//               <img src={photoUrlArray[index]} alt="öğretmen fotoğrafı"></img>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
