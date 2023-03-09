import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function UserModal({
  isOpen,
  isUserSelf,
  onClose,
}: {
  isOpen: boolean;
  isUserSelf: boolean;
  onClose: () => void;
}) {
  const cancelButtonRef = useRef(null);
  const [imgs, setImgs] = useState<string[]>([]);
  const [imgFiles, setImgFiles] = useState<Blob[]>([]);

  const handleFileChange = (e: any) => {
    const newImgs = [];
    for (const file of e.target.files) {
      newImgs.push(URL.createObjectURL(file));
    }
    setImgs([...imgs, ...newImgs]);
    setImgFiles([...imgFiles, ...e.target.files]);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                <div className="bg-white">
                  <h1 className="flex items-center justify-center h-20 font-bold">
                    Change Profile Photo
                  </h1>
                  <label className="inline-block h-10 w-full">
                    <span
                      className="flex items-center justify-center h-10 border-t-2 text-blue-500 font-bold cursor-pointer"
                    >
                      Upload Photo
                    </span>
                    <input
                      type="file"
                      className="absolute w-full opacity-0 -z-10"
                      onChange={handleFileChange}
                      accept="image/*"
                      multiple
                    ></input>
                  </label>
                  <span className="flex items-center justify-center h-10 border-t-2 cursor-pointer text-red-500 font-bold">
                    Remove Current Photo
                  </span>
                  <span
                    className="flex items-center justify-center h-10 border-t-2 cursor-pointer"
                    onClick={onClose}
                  >
                    Cancel
                  </span>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
