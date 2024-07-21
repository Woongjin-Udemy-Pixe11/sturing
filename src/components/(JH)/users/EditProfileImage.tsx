'use client';
import supabase from '@/lib/supabaseClient';
import { updateImage } from '@/utils/profileUpdate';
import { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
export default function EditProfileImage({
  id,
  currentImage,
}: {
  id: string;
  currentImage: string;
}) {
  console.log(id, '📌');
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  const uploadImage = async (e: any) => {
    e.preventDefault();
    if (!image) return;

    const fileName = `${Date.now()}-${Math.random()}`;
    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, image);

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

  const cancelImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  return (
    <>
      <div className="relative">
        <div className="w-[9rem] h-[9rem] rounded-full overflow-hidden">
          <img
            src={previewUrl || currentImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={openFileSelector}
          className="absolute right-0 bottom-0 bg-gray-300 rounded-full p-2"
        >
          <FaCamera size={18} className="text-gray-600" />
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          ref={fileInputRef}
          className="hidden"
        />
        {previewUrl && (
          <div className="absolute -bottom-[4rem] left-1/2 transform -translate-x-1/2 flex gap-2 w-full max-w-[20rem]">
            <button
              onClick={uploadImage}
              className="w-full bg-main-600 text-white px-[.6rem] py-[.4rem] text-content-2 rounded whitespace-nowrap"
            >
              수정
            </button>
            <button
              onClick={cancelImage}
              className="w-full bg-main-100 text-main-600 border border-main-600 text-content-2 p-[.5rem] rounded whitespace-nowrap"
            >
              취소
            </button>
          </div>
        )}
      </div>
    </>
  );
}
