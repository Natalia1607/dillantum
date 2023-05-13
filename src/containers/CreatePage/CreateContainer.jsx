import React, { useState } from "react";
import {
  MdOutlineRealEstateAgent,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import Loader from "../../components/UI/Loader/Loader";
import { categories } from "../../utils/filterData";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../config/firebase";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { PlusOutlined } from "@ant-design/icons";

import "./createPage.scss";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [purpose, setPurpose] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [rooms, setCategory] = useState("");
  const [baths, setBaths] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState(true);
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      <div className="container__upload">
        <div className="upload__input flex">
          <MdOutlineRealEstateAgent className="icon"/>
          <input
            type="text"
            required
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="upload__input">
          <select name="" id="" onChange={(e) => setPurpose(e.target.value)}>
            <option value="other">Select purpose</option>
            {categories &&
              categories.map((item) => (
                <option key={item.id} value={item.queryName}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="upload__image flex ai-c jc-c">{isLoading ? <Loader /> : <>
        {!imageAsset ? <>
        <label>
          <div>
            <MdCloudUpload className="icon"/>
            <p>Click here to upload</p>
          </div>
          <input type="file" name="uploadimage" accept="image/*" onChange/>
        </label>
        </> : <></>}
        </>}</div>
      </div>
    </div>
  );
};

export default CreateContainer;
