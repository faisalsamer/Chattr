'use client'
import React, { useState } from 'react'
import Button from './Button'
import { LogOut } from 'lucide-react'
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
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <>
            {/* Your button that triggers ripple AND opens dialog */}
            <Button
                onClick={() => {
                    setIsDialogOpen(true);
                }}
            >
                <LogOut size={22} color="var(--icon-primary)" />
            </Button>

            {/* Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Logout</DialogTitle>
                    </DialogHeader>
                    <p>Are you sure you want to log out?</p>
                    <DialogFooter>
                        <div className='flex justify-center items-center'>
                            <DialogClose asChild>
                                <ShadButton variant={'ghost'} className='text-blue-500 hover:text-blue-500 hover:bg-blue-50 font-bold text-md outline-none button-press'>Cancel</ShadButton>
                            </DialogClose>
                            <ShadButton variant={'ghost'} className='text-red-500 hover:text-red-500 hover:bg-red-50 font-bold text-md outline-none button-press'
                            onClick={() => alert('Logged out!')}>Logout</ShadButton>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default LogoutButton
