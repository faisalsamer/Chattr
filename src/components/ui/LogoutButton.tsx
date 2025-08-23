'use client'
import React, { useState } from 'react'
import Button from './Button'
import { useRipples } from '@/hooks/useRipples'
import { LogOut } from 'lucide-react'
import RippleAnimation from './RippleAnimation'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose
} from '@/components/ui/shadcn/dialog'
import { Button as ShadButton } from './shadcn/button'

const LogoutButton: React.FC = () => {
    const { ripples, createRipple } = useRipples()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <>
            {/* Your button that triggers ripple AND opens dialog */}
            <Button
                onClick={(e) => {
                    createRipple(e, false)
                    setIsDialogOpen(true)
                }}
            >
                <LogOut color="#787878" />
                <RippleAnimation ripples={ripples} />
            </Button>

            {/* Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Logout</DialogTitle>
                    </DialogHeader>
                    <p>Are you sure you want to log out?</p>
                    <DialogFooter>
                        <DialogClose asChild>
                            <ShadButton variant={'ghost'} className='text-blue-500 hover:text-blue-500 hover:bg-blue-50 active:scale-95'>Cancel</ShadButton>
                        </DialogClose>
                        <ShadButton variant={'ghost'} className='text-red-500 hover:text-red-500 hover:bg-red-50 active:scale-95' 
                        onClick={() => alert('Logged out!')}>Logout</ShadButton>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default LogoutButton
