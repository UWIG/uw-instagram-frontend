import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ChangePassword() {
  const [isAvatarOpen, setAvatarOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);

  return (
    <>
      <div>
        <span className="block text-sm font-medium text-slate-700">
          changePassword
        </span>
        <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border" />
      </div>
    </>
  );
}
