// CustomModalNextUI.tsx
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/react';

type CustomModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  headerContent?: React.ReactNode;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  size?:
  | '2xl'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xs'
  | '3xl'
  | '4xl'
  | '5xl'
  | 'full'
  | undefined;
  placement?:
  | 'center'
  | 'auto'
  | 'top'
  | 'top-center'
  | 'bottom'
  | 'bottom-center';
  scrollBehavior?: 'normal' | 'inside' | 'outside';
  isDismissable?: boolean;
  classNames?: Record<
    | 'wrapper'
    | 'base'
    | 'backdrop'
    | 'header'
    | 'body'
    | 'footer'
    | 'closeButton',
    string
  >;
};

const CustomModalNextUI: React.FC<CustomModalProps> = ({
  isOpen,
  onOpenChange,
  headerContent,
  children,
  footerContent,
  size = '2xl',
  placement = 'center',
  scrollBehavior,
  isDismissable,
  classNames,
}) => {
  return (
    <Modal
      size={size}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop={'blur'}
      scrollBehavior={scrollBehavior}
      placement={placement}
      autoFocus={false}
      isDismissable={isDismissable}
      classNames={{
        wrapper: `${classNames?.wrapper} !will-change-auto shadow-lg shadow-black !important`,
        base: `${classNames?.base} p-2 rounded-none bg-[#D8F34E] shadow-lg shadow-black z-[100]`,
        backdrop: `${classNames?.backdrop}`,
        header: `${classNames?.header} px-2 sm:px-6`,
        body: `${classNames?.body} px-2 sm:px-6`,
        footer: `${classNames?.footer} px-2 sm:px-6`,
        closeButton: `${classNames?.closeButton}`,
      }}
    >
      <ModalContent>
        {() => (
          <>
            {headerContent && (
              <ModalHeader className='flex flex-col gap-1'>
                {headerContent}
              </ModalHeader>
            )}
            <ModalBody>{children}</ModalBody>
            {footerContent && <ModalFooter>{footerContent}</ModalFooter>}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModalNextUI;
