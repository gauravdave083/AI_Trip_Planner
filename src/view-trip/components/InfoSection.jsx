// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";



function InfoSection({trip}) {
//   const [photoUrl,setPhotoUrl] = useState();
//   useEffect(()=>{
//     trip&&GetPlaceImg();
//   },[trip])

  // const GetPlaceImg=async()=>{
  //   const data={
  //     textQuery:trip?.userSelection?.location
  //   }
  //   const result= await GetPlaceDetails(data).then(resp=>{
  //     // console.log(resp.data.places[0].photos[3].name)
  //     const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
  //     setPhotoUrl(PhotoUrl);
     
  //   })
  // }
  return (
    <div>
      <img src='/placeholder.jpg'  className='h-[340px] w-full object-cover rounded-xl'/>
       <div className='flex justify-between items-center'>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                <div className='flex gap-6 mt-4'>
                    <h2 className='bg-gray-200 font-medium text-gray-600 rounded-full p-1 px-4 md:text-md'>🗓️ {trip?.userSelection?.noOfDays} Day</h2>
                    <h2 className='bg-gray-200 font-medium text-gray-600 rounded-full p-1 px-4 md:text-md'>👩‍👧‍👦 Number of Traveler : {trip?.userSelection?.traveler} People</h2>
                    <h2 className='bg-gray-200 font-medium text-gray-600 rounded-full p-1 px-4 md:text-md'>💵 {trip?.userSelection?.budget} Budget </h2>
                </div>
            </div>
            <Button><IoIosSend /></Button>
       </div>
    </div>
  )
}

export default InfoSection