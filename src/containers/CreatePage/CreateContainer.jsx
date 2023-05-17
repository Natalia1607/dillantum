import React, { useState } from "react";
import {
  MdOutlineRealEstateAgent,
  MdCloudUpload,
  MdDelete,
  MdLocationCity,
  MdAttachMoney,
  MdSpaceDashboard,
} from "react-icons/md";
import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
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
import { saveItem, getAllAds } from "../../utils/firebaseFunctions";
import { Footer } from '../../components';
import "./createPage.scss";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [purpose, setPurpose] = useState(null);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [rooms, setRooms] = useState("");
  const [baths, setBaths] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [alertStatus, setAlertStatus] = useState("danger");
  /* const [{ ad }, dispatch] = useStateValue(); */

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try Again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (
        !title ||
        !purpose ||
        !city ||
        !address ||
        !rooms ||
        !baths ||
        !size ||
        !price ||
        !description ||
        !imageAsset
      ) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: purpose,
          city: city,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded successfully");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try Again");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setPurpose("Select Purpose");
    setCity("");
    setAddress("");
    setRooms("");
    setBaths("");
    setSize("");
    setPrice("");
    setDescription("");
    setImageAsset(null);
  };

  const fetchData = async () => {
    await getAllAds().then((data) => {
      /* dispatch({
        type: actionType.SET_ITEMS,
        ad: data,
      }); */
    });
  };

  return (
    <div className="container">
      <div className="container__upload">
        {fields && (
          <p
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </p>
        )}
        <div className="upload__input flex">
          <MdOutlineRealEstateAgent className="icon" />
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

        <div className="upload__image flex ai-c jc-c">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label>
                    <div>
                      <MdCloudUpload className="icon" />
                      <p>Click here to upload</p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                    />
                  </label>
                </>
              ) : (
                <>
                  <div>
                    <img src={imageAsset} alt="upload image" />
                    <button type="button" className="btn" onClick={deleteImage}>
                      <MdDelete className="icon" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="upload__input">
          <MdLocationCity className="icon" />
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </div>
        <div className="upload__input">
          <HiOutlineLocationMarker className="icon" />
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </div>

        <div className="flex f-wrap">
          <div className="upload__input">
            <RiHotelBedFill className="icon" />
            <input
              type="number"
              required
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              placeholder="Beds"
            />
          </div>
          <div className="upload__input">
            <FaBath className="icon" />
            <input
              type="number"
              required
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              placeholder="Baths"
            />
          </div>
          <div className="upload__input">
            <MdSpaceDashboard className="icon" />
            <input
              type="text"
              required
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="Sqft"
            />
          </div>
          <div className="upload__input">
            <MdAttachMoney className="icon" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </div>
        </div>

        <div className="upload__input">
          <textarea
            name="description"
            id=""
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          ></textarea>
        </div>

        <div className="upload__footer">
          <button type="button" className="btn btn-primary hover-diagonal_light" onClick={saveDetails}>
            Save
          </button>
          <span>*Ads are moderated before being published</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateContainer;
