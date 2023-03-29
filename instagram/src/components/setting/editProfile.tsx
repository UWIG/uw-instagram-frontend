import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditProfile() {
  const [isAvatarOpen, setAvatarOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);

  return (
    <>
      <div>
        <div></div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Name
          </span>
          <input
            type={"text"}
            defaultValue={"123"}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Username
          </span>
          <input
            type={"text"}
            defaultValue={"123"}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Email
          </span>
          <input
            type={"text"}
            defaultValue={"123"}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Phone number
          </span>
          <input
            type={"text"}
            defaultValue={"123"}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 mt-5">
          <span className="block text-sm font-medium text-slate-700 mr-5 col-span-2 mx-auto">
            Gender
          </span>
          <input
            type={"text"}
            defaultValue={"123"}
            className="  col-span-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border"
          />
        </div>
        <div className="mt-5 flex">
          <button className=" h-8 w-28 mx-auto bg-sky-500 hover:bg-sky-700 rounded-full text-sm font-medium text-slate-200">
            {" "}
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}
