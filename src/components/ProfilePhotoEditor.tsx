'use client'
import { useState } from 'react'
import Cropper from 'react-easy-crop'
import { Button } from '@/components/ui/shadcn/button'
import { Slider } from '@/components/ui/shadcn/slider'

export default function ProfilePhotoEditor() {
  const [image, setImage] = useState<string | null>('/FaisalPhoto.jpg') // default profile photo
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  return (
    <div className="flex flex-col gap-4">
      {/* File input */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) setImage(URL.createObjectURL(file))
        }}
      />

      {/* Cropping area */}
      {image && (
        <div className="relative w-[300px] h-[300px] bg-gray-200 overflow-hidden rounded-full">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1} // enforce 1:1 like Telegram
            cropShape="round" // 👈 makes preview circular
            onCropChange={setCrop}
            onZoomChange={setZoom}
          />
        </div>
      )}

      {/* Zoom control */}
      <Slider value={[zoom]} onValueChange={(val) => setZoom(val[0])} min={1} max={3} step={0.1} />

      {/* Save button */}
      <Button onClick={() => console.log('TODO: extract cropped image')}>Save</Button>
    </div>
  )
}
