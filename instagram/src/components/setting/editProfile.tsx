import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AvatarModal from "../profile/avatarModal";

export default function EditProfile() {
  const [isAvatarOpen, setAvatarOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [id, setUserID] = useState("");
  const [originUsername, setOriginUsername] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      await axios({
        method: "get",
        url: `http://localhost:8080/alex`, //need to change
      }).then((res) => {
        console.log(res.data);
        setAvatar(res.data.avatar.data);
        setName(res.data.fullname);
        setOriginUsername(res.data.username);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPhone(res.data.phoneNumber);
        setGender(res.data.gender);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function updateUser() {
    const formData = new FormData();
    formData.append("fullname", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("gender", gender);
    console.log(name);
    console.log(username);
    console.log(email);
    console.log(phone);
    console.log(gender);
    console.log(originUsername);
    await axios({
      method: "post",
      url: `http://www.localhost:8080/user/update/${originUsername}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      console.log(res);
      setOriginUsername(username);
    });
  }

  return (
    <>
      <div>
        <AvatarModal
          isOpen={isAvatarOpen}
          isUserSelf={true}
          setAvatar={setAvatar}
          onClose={() => setAvatarOpen(false)}
        ></AvatarModal>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <div className="col-span-2">
            <img
              className="rounded-full w-12 h-12 flex mr-3 mx-auto"
              src={avatar}
              alt="abc"
            />
          </div>
          <div className="col-span-3 grid grid-flow-row">
            <span>{originUsername}</span>
            <span
              onClick={() => setAvatarOpen(true)}
              className="  text-blue-600 cursor-pointer"
            >
              Change profile photo
            </span>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Name
          </span>
          <input
            type={"text"}
            defaultValue={name}
            onChange={(event)=>setName(event.target.value)}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Username
          </span>
          <input
            type={"text"}
            defaultValue={username}
            onChange={(event)=>setUsername(event.target.value)}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Email
          </span>
          <input
            type={"text"}
            defaultValue={email}
            onChange={(event)=>setEmail(event.target.value)}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Phone number
          </span>
          <input
            type={"text"}
            defaultValue={phone}
            onChange={(event)=>setPhone(event.target.value)}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Gender
          </span>
          <div className="col-span-5">
            <div className="radio ">
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                />
                Male
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                />
                Female
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="privacy"
                  checked={gender === "privacy"}
                  onChange={() => setGender("privacy")}
                />
                Prefer not to say
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5 flex">
          <button className=" h-8 w-28 mx-auto bg-sky-500 hover:bg-sky-700 rounded-full text-sm font-medium text-slate-200" onClick={()=>updateUser()}>
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}
