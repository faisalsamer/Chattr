"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/shadcn/button"
import { Slider } from "@/components/ui/shadcn/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/shadcn/dialog"
import { Check, Upload } from "lucide-react"

interface PhotoEditorModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ImagePosition {
  x: number
  y: number
  scale: number
}

export default function PhotoEditorModal({ isOpen, onClose }: PhotoEditorModalProps) {
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [imagePosition, setImagePosition] = useState<ImagePosition>({ x: 0, y: 0, scale: 1 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [minScale, setMinScale] = useState(1)
  const [maxScale] = useState(3)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const CANVAS_SIZE = 320
  const CROP_SIZE = 280

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const img = new Image()
    img.onload = () => {
      const scaleToFitWidth = CANVAS_SIZE / img.width
      const scaleToFitHeight = CANVAS_SIZE / img.height
      const calculatedMinScale = Math.max(scaleToFitWidth, scaleToFitHeight)

      setMinScale(calculatedMinScale)
      setImage(img)
      setImagePosition({ x: 0, y: 0, scale: calculatedMinScale })
    }
    img.src = URL.createObjectURL(file)
  }, [])

  const constrainPosition = useCallback((x: number, y: number, scale: number, imgWidth: number, imgHeight: number) => {
    const scaledWidth = imgWidth * scale
    const scaledHeight = imgHeight * scale

    const excessWidth = Math.max(0, scaledWidth - CANVAS_SIZE)
    const excessHeight = Math.max(0, scaledHeight - CANVAS_SIZE)

    const maxX = excessWidth / 2
    const minX = -excessWidth / 2
    const maxY = excessHeight / 2
    const minY = -excessHeight / 2

    return {
      x: Math.max(minX, Math.min(maxX, x)),
      y: Math.max(minY, Math.min(maxY, y)),
    }
  }, [])

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !image) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

    const scaledWidth = image.width * imagePosition.scale
    const scaledHeight = image.height * imagePosition.scale
    const centerX = CANVAS_SIZE / 2
    const centerY = CANVAS_SIZE / 2
    const drawX = centerX - scaledWidth / 2 + imagePosition.x
    const drawY = centerY - scaledHeight / 2 + imagePosition.y
    const radius = CROP_SIZE / 2

    // Draw the full image first
    ctx.drawImage(image, drawX, drawY, scaledWidth, scaledHeight)

    // Apply blur and darkening to everything outside the circle
    ctx.save()
    
    // Create an inverted mask (everything except the circle)
    ctx.globalCompositeOperation = "source-atop"
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)"
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    
    // Cut out the circle area to keep it clear
    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.restore()

    // Redraw the circle area clearly (without any overlay)
    ctx.save()
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.clip()
    ctx.drawImage(image, drawX, drawY, scaledWidth, scaledHeight)
    ctx.restore()

    // Draw the circle border
    ctx.strokeStyle = "#e1e1e1"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.stroke()
}, [image, imagePosition])

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (!image) return

      setIsDragging(true)
      const rect = canvasRef.current?.getBoundingClientRect()
      if (rect) {
        setDragStart({
          x: event.clientX - rect.left - imagePosition.x,
          y: event.clientY - rect.top - imagePosition.y,
        })
      }
    },
    [image, imagePosition],
  )

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!isDragging || !image) return

      const rect = canvasRef.current?.getBoundingClientRect()
      if (rect) {
        const newX = event.clientX - rect.left - dragStart.x
        const newY = event.clientY - rect.top - dragStart.y

        const constrainedPos = constrainPosition(newX, newY, imagePosition.scale, image.width, image.height)

        setImagePosition((prev) => ({
          ...prev,
          x: constrainedPos.x,
          y: constrainedPos.y,
        }))
      }
    },
    [isDragging, dragStart, image, imagePosition.scale, constrainPosition],
  )

  const handlePointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleZoomChange = useCallback(
    (value: number[]) => {
      if (!image) return

      const newScale = value[0]
      const constrainedPos = constrainPosition(imagePosition.x, imagePosition.y, newScale, image.width, image.height)

      setImagePosition((prev) => ({
        ...prev,
        scale: newScale,
        x: constrainedPos.x,
        y: constrainedPos.y,
      }))
    },
    [image, imagePosition.x, imagePosition.y, constrainPosition],
  )

  const handleSave = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !image) return

    const outputCanvas = document.createElement("canvas")
    const outputCtx = outputCanvas.getContext("2d")
    if (!outputCtx) return

    outputCanvas.width = CROP_SIZE
    outputCanvas.height = CROP_SIZE

    outputCtx.save()

    const radius = CROP_SIZE / 2
    outputCtx.beginPath()
    outputCtx.arc(radius, radius, radius, 0, 2 * Math.PI)
    outputCtx.clip()

    const scaledWidth = image.width * imagePosition.scale
    const scaledHeight = image.height * imagePosition.scale
    const drawX = radius - scaledWidth / 2 + imagePosition.x
    const drawY = radius - scaledHeight / 2 + imagePosition.y

    outputCtx.drawImage(image, drawX, drawY, scaledWidth, scaledHeight)
    outputCtx.restore()

    outputCanvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "profile-picture.png"
        a.click()
        URL.revokeObjectURL(url)
      }
    })
  }, [image, imagePosition])

  useEffect(() => {
    drawCanvas()
  }, [drawCanvas])

  useEffect(() => {
    if(isOpen) {
      setImage(null)
      setImagePosition({ x: 0, y: 0, scale: 1 })

      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0">
        <DialogHeader className="p-4 border-b border-border">
          <DialogTitle className="text-lg font-semibold">Drag to reposition</DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <div ref={containerRef} className="relative mx-auto" style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}>
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              className={`rounded-lg ${image ? "cursor-move" : "cursor-default"}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            />

            {!image && (
              <div className="absolute inset-0 flex items-center justify-center bg-card rounded-lg border-2 border-dashed border-border">
                <div className="text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Upload a photo</p>
                </div>
              </div>
            )}
          </div>

          {image && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Drag the image to reposition it within the circle
            </p>
          )}

          {image && (
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground min-w-0">Zoom</span>
                <Slider
                  value={[imagePosition.scale]}
                  onValueChange={handleZoomChange}
                  min={minScale}
                  max={maxScale}
                  step={0.1}
                  className="flex-1"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-4 border-t border-border">
          <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload Photo
          </Button>

          <Button
            onMouseDown={handleSave}
            disabled={!image}
            className="flex items-center gap-2 bg-[var(--primary-blue-hover)] hover:bg-[var(--primary-blue-hover)]/90 text-primary-foreground"
          >
            <Check className="h-4 w-4" />
            Save
          </Button>
        </div>

        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
      </DialogContent>
    </Dialog>
  )
}
