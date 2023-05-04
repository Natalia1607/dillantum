import React, { useState } from "react";
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from "react-icons/md";
import Loader from "../../components/UI/Loader/Loader";

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebase";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
 
const CreatePage = () => {
  return (
    <div>CreatePage</div>
  )
}

export default CreatePage