"use client";

import { FormEvent, useState } from "react";
import { FileUploader } from "./dropzone2";
import { useUploadThing } from "./uploadthing";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [url, setUrl] = useState("");

  const { startUpload } = useUploadThing("imageUploader");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    //console.log(files);
    let uploadedImageUrl = "";

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }
    console.log(uploadedImageUrl);
  };

  return (
    <form onSubmit={onSubmit}>
      <FileUploader setFiles={setFiles} imageUrl={url} onFieldChange={setUrl} />
      <button>Submit</button>
    </form>
  );
};

export default Upload;
