import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { modalType } from './sidebarType'
import axios from 'axios';
import Thumbnail from './thumbnail';
import ModalForm from './modal-form';
import UserContext from '../../contexts/user-context';

export default function Modal(props: modalType) {
  const {username} = useContext(UserContext);
  const [imgs, setImgs] = useState<string[]>([]);
  const [imgIdx, setImgIdx] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [caption, setCaption] = useState("");
  const [imgFiles, setImgFiles] = useState<Blob[]>([]);
  const [thumbnail, setThumbnail] = useState(false);
  const cancelButtonRef = useRef(null);

  console.log(username);

  const handleFileChange = (e: any) => {
    const newImgs = [];
    for (const file of e.target.files) {
      newImgs.push(URL.createObjectURL(file));
    }
    setImgs([...imgs, ...newImgs]);
    setImgFiles([...imgFiles, ...e.target.files]);
  }

  const handleOnClose = () => {
    props.onClose();
    setCaption("");
    setImgs([]);
    setShowForm(false);
    setImgIdx(0);
    setImgFiles([]);
    setThumbnail(false);
  }



  const handleDelete = () => {
    setImgs(imgs.filter((img, idx) => idx !== imgIdx));
    setImgFiles(imgFiles.filter((imgFile, idx) => idx !== imgIdx));
    setThumbnail(false);
    setImgIdx(Math.max(0, imgIdx - 1));
  }

  async function handleClick() {
    if (!showForm) {
      setShowForm(true);
      setThumbnail(false);
    } else {
      console.log(imgFiles);
      const formData = new FormData();
      formData.append("caption", caption);
      formData.append("avatar", "https://drscdn.500px.org/photo/1061497838/q%3D80_m%3D1500_of%3D1/v2?sig=50f03aaa9f8f72ff52b541175f0e0af804a22517c8c096fb30e23318d938a658");
      for (const imgFile of imgFiles) {
        formData.append("media", imgFile);
      }
      await axios({
        method: "post",
        url: `http://localhost:8080/api/posts/${username}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (res) {
        console.log(res);
      })
        .catch(function (err) {
          console.error(err);
        });
      handleOnClose();
      props.onCreatePost();
    }
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={handleOnClose}>
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

        <div data-testid="sidebar-modal" className="fixed inset-0 z-10 ">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0 h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={`relative gap-2transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 ${showForm ? 'w-2/3' : 'w-2/5'}`}>
                <div className="container">
                  <div className="sm:items-start ">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <div className="mt-2 relative">
                        <div className="flex border-b border-gray-primary h-8 justify-center">
                          <span className="text-md font-bold">Create new post</span>
                          {imgs.length > 0 && <button style={{ "color": "rgb(0, 149, 246)" }} className='absolute right-3 cursor-pointer text-sm z-10 cursor-pointer bg-slate-50/[.7] rounded-full px-2 py-0.5 font-bold' onClick={handleClick}>{showForm ?
                            "Share" : "Next"}</button>}
                        </div>
                        <div className={showForm ? 'grid grid-cols-3' : 'grid grid-cols-2'}>
                          <div className='flex relative pb-[100%] col-span-2 '>
                            {imgs.length > 0 ?
                              <div>
                                <img src={imgs[imgIdx]} className="absolute w-full h-full object-cover " />
                                {imgIdx > 0 && <button className='absolute top-1/2 left-[5%] text-sm z-10 text-white cursor-pointer bg-[#1a1a1acc] rounded-full px-2 py-0.5 font-bold'
                                  onClick={() => { setImgIdx(imgIdx - 1) }}>&#10094;</button>}
                                {imgIdx < imgs.length - 1 && <button className='absolute top-1/2 right-[5%] text-sm z-10 text-white cursor-pointer bg-[#1a1a1acc] rounded-full px-2 py-0.5 font-bold'
                                  onClick={() => { setImgIdx(imgIdx + 1) }}>&#10095;</button>}
                                {imgs.length >= 2 &&
                                  <div className='absolute bottom-3 text-lg flex justify-center w-full'>
                                    {imgs.map((img, idx) => <span className='h-2 w-2 rounded-full mr-2' style={{ "backgroundColor": idx === imgIdx ? "rgb(0, 149, 246)" : "rgb(168, 168, 168)" }}></span>)}
                                  </div>}
                                {thumbnail && <Thumbnail imgIdx={imgIdx} imgs={imgs} setImgIdx={setImgIdx} handleFileChange={handleFileChange} handleDelete={() => handleDelete()} />}
                                <div className='absolute bottom-3 right-5 px-2 py-2 bg-[#1a1a1acc] cursor-pointer text-neutral-500 z-10 font-bold rounded-full'>
                                  <svg onClick={() => setThumbnail(!thumbnail)} aria-label="Open media gallery" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z" fillRule="evenodd"></path></svg>
                                </div>
                              </div>
                              : <>
                                <p className="absolute left-1/3 text-sm text-gray-500">
                                  Drag photos and videos here
                                </p>
                                <button className='absolute top-1/3 left-1/3 px-3 py-2 bg-sky-600 rounded-lg text-white font-bold cursor-pointer'>Select from computer
                                  <input type="file" className='absolute top-0 left-0 opacity-0 w-full h-full' onChange={handleFileChange} accept="image/*" multiple />
                                </button> </>}
                          </div>
                          {showForm && <ModalForm caption={caption} setCaption={setCaption} />}
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
