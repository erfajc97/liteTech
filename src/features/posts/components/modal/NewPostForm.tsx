"use client";
import CustomUpload from "@/UI/customUpload/CustomUpload";
import { Button, Input } from "@nextui-org/react";
import { Form } from "antd";
import { FormValues } from "../../types";
import useNewPostHook from "../../hooks/useNewPostHook";
import UploadFileProcess from "./UploadFileProcess";
import { usePostsStore } from "@/store/usePostsStore";



const NewPostForm = ({ setDoneSuccessfully }: { setDoneSuccessfully: (value: boolean) => void }) => {
  const [form] = Form.useForm();
  const { handleSubmit } = useNewPostHook();
  const { setIsUploading, isUploading, setIsCancelled } = usePostsStore();


  const isProcess = () => {
    setIsUploading(true);
    setIsCancelled(false);
  }

  const onFinish = async (values: FormValues) => {
    await handleSubmit(values);
    isProcess()
    form.resetFields();
  };

  return (
    <div className="px-5 lg:px-0">
      <p className="text-center text-[#595959]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        commodo libero.
      </p>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="flex flex-col gap-4 my-4 px-7"
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Insertar el titulo del post",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Post title"
            variant="bordered"
            className="bg-white"
            classNames={{
              input: "text-black",
              label: "text-black",
              inputWrapper: "border-black rounded-none py-7",
            }}
          />
        </Form.Item>
        {isUploading ? (
          <UploadFileProcess setDoneSuccessfully={setDoneSuccessfully} />
        ) : (
          <Form.Item
            name="image"
            rules={[
              {
                required: true,
                message: "Insertar la imagen del producto",
              },
            ]}
          >
            <CustomUpload
              uploadHint=""
              allowedTypes={["image/png", "image/jpeg", "image/jpg"]}
              maxSizeMB={10}
              maxCount={1}
            />
          </Form.Item>
        )}
        <Form.Item>
          <div className="w-full lg:flex lg:justify-center">
            <Button
              type="submit"
              className="bg-black text-white rounded-none w-full lg:w-auto p-7"
            >
              Confirmar
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewPostForm;
