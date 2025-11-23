'use client';

import { ReactNode, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, title, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-8">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-600 shadow hover:bg-white"
          aria-label="Close modal"
        >
          <FiX className="h-5 w-5" />
        </button>
        {title && (
          <div className="border-b border-gray-100 px-6 py-4">
            <p className="text-lg font-semibold text-gray-900">{title}</p>
          </div>
        )}
        <div className="max-h-[85vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
