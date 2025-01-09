import React, { useState } from "react";
import { NewPostModalProps } from "../../types";
import CustomModalNextUI from "@/UI/customModalNextUI/CustomModalNextUI";
import NewPostForm from "./NewPostForm";
import { Button } from "@nextui-org/react";

const NewPostModal: React.FC<NewPostModalProps> = ({
  isOpen,
  onOpenChange,
}) => {

  const [doneSuccessfully, setDoneSuccessfully] = useState(false);
  const handleDone = () => {
    onOpenChange(false);
    setDoneSuccessfully(false);
  }
  return (
    <CustomModalNextUI
      size="lg"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      headerContent={<h3 className="px-5 lg:px-0 text-center text-4xl text-black font-semibold">{doneSuccessfully ? "Your post was successfully uploaded!" : "Upload your post"}</h3>}
    >
      {doneSuccessfully ? <div className="w-full lg:flex lg:justify-center mt-5">
        <Button
          onPress={handleDone}
          className="bg-black text-white rounded-none w-full lg:w-auto p-7"
        >
          Done
        </Button>
      </div> : <NewPostForm setDoneSuccessfully={setDoneSuccessfully} />}
    </CustomModalNextUI>
  );
};

export default NewPostModal;
