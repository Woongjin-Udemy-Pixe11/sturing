'use client';
import { FaCamera } from 'react-icons/fa';
import supabase from '@/lib/supabaseClient';
import { useState } from 'react';
import { updateImage } from '@/utils/profileUpdate';
export default function EditProfileImage({ id }: { id: any }) {
  console.log(id, '📌');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const uploadImage = async (e: any) => {
    e.preventDefault();
    if (!image) return;

    const file: any = image[0];
    const fileName = `${Date.now()}-${Math.random()}`;
    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, file);

    if (error) {
      console.error('Error uploading image:', error);
    } else {
      console.log('Image uploaded successfully:', data);

      // Get the public URL of the uploaded image
      const test = supabase.storage.from('images').getPublicUrl(fileName);

      updateImage({ id: id, url: test.data.publicUrl });
      setImageUrl(test.data.publicUrl);
      setImage(null);
    }
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e: any) => setImage(e.target.files)}
      />
      <FaCamera
        size={16}
        className="text-gray-600  border  border-gray-500 rounded-full bg-gray-300 p-1 absolute right-0 bottom-0"
        onClick={uploadImage}
      />
    </>
  );
}
