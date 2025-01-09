export interface Post {
  id: string;
  title: string;
  image: string;
  description?: string;
  timeToRead?: string;
  tags?: string;
}


export interface NewPostModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export type FormValues = {
  title: string;
  image: {
    file: {
      originFileObj: File;
    };
  };
};