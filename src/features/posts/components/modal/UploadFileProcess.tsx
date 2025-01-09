"use client";
import { usePostsStore } from "@/store/usePostsStore";
import { Progress } from "@nextui-org/react";
import React from "react";

const UploadFileProcess = ({ setDoneSuccessfully }: { setDoneSuccessfully: (value: boolean) => void }) => {
  const [value, setValue] = React.useState(0);
  const { handleCancel, setIsUploading } = usePostsStore()

  const handleProgressCancel = () => {
    handleCancel();
    setValue(0);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        if (v >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setDoneSuccessfully(true);
          return 100;
        }
        return v + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [setIsUploading]);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-black">Loading image {value}%</p>
      <Progress
        aria-label="Downloading..."
        className="max-w-md rounded-none"
        color="default"
        classNames={{
          indicator: "bg-black rounded-none",
          track: "rounded-none",
        }}
        size="md"
        value={value}
      />
      <div className="flex justify-end w-full pr-2">
        <button
          onClick={handleProgressCancel}
          className="mt-2 text-black hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UploadFileProcess;
