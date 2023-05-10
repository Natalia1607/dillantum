import React, { useState } from "react";
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from "react-icons/md";
import Loader from "../../components/UI/Loader/Loader";

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebase";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { PlusOutlined } from '@ant-design/icons';

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [rooms, setCategory] = useState(null);
  const [baths, setBaths] = useState(null);
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [description, setDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      CreateContainer
    </div>
  )
}

export default CreateContainer;