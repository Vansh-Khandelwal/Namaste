import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
// import { uploadImage } from '../../../Actions/UploadActions/uploadImage.js';
import { updateUser } from '../../../Actions/UserActions/userAction.js';

import './ProfileModal.css'

function ProfileModal({openEdit, setOpenEdit, data}) {
  const theme = useMantineTheme();

  const {Password, ...other} = data
  const [formData, setFormData] = useState(other)

  const [profileImg, setProfileImg] = useState(null)
  const [coverImg, setCoverImg] = useState(null)

  const [profileImg_preview, setProfileImgPreview] = useState('')
  const [coverImg_preview, setCoverImgPreview] = useState('')

  const dispatch = useDispatch()
  const param = useParams()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleImgChange = (event) => {
    const file = Array.from(event.target.files);
    // console.log(file)

    setProfileImg([]);
    setCoverImg([]);

    // Handling Image
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        if (event.target.name === "ProfileImg") {
          setProfileImgPreview(file.name);
          setProfileImg(reader.result);
        } else {
          setCoverImgPreview(file.name);
          setCoverImg(reader.result)
        }
      }
    };

    reader.readAsDataURL(file[0]);
  }

  const handlesubmit = (event) => {

    event.preventDefault()

    let userData = formData

    if (profileImg) {
      // const data = new FormData()
      // const filename = Date.now() + profileImg.name
      // data.append("name", filename)
      // data.append("file", profileImg)

      // console.log(userData)

      userData.ProfileImg ? userData.ProfileImg = profileImg : userData["ProfileImg"] = profileImg;

      // console.log(userData)

      // try {
      //   dispatch(uploadImage(data))
      // } catch (error) {
      //   console.log(error)
      // }
    }

    if (coverImg) {
      // const data = new FormData()
      // const filename = Date.now() + coverImg.name
      // data.append("name", filename)
      // data.append("file", coverImg)

      userData.CoverImg = coverImg

      // try {
      //   dispatch(uploadImage(data))
      // } catch (error) {
      //   console.log(error)
      // }
    }

    dispatch(updateUser(param.id, userData))
    setOpenEdit(false)

  }

  // console.log(formData)
  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='50%'
      radius={20}
      opened={openEdit}
      onClose={()=>setOpenEdit(false)}
    >
    
      <form className="InfoForm">
        <h3>Your Info</h3>

        <div>
          <input type="text" placeholder={formData.Firstname ? formData.Firstname : "First Name"} name="FirstName" className="info-info" onChange={handleChange} />
          <input type="text" placeholder={formData.Lastname ? formData.Lastname : "Last Name"} name="LastName" className="info-info" onChange={handleChange} />
        </div>

        <div>
          <input type="text" placeholder={formData.WorksAt ? formData.WorksAt : "Works At"} name="WorksAt" className="info-info" onChange={handleChange} />
        </div>

        <div>
          <input type="text" placeholder={formData.LivesIn ? formData.LivesIn : "Lives In"} name="LivesIn" className="info-info" onChange={handleChange} />
          <input type="text" placeholder={formData.Country ? formData.Country : "Country"} name="Country" className="info-info" onChange={handleChange} />
        </div>

        <div>
          <input type="text" placeholder={formData.Relationship_Status ? formData.Relationship_Status : "Relationship Status"} name="Relationship_Status" className="info-info" onChange={handleChange} />
        </div>

        <div className="files">
          <div>Profile Image</div>
          <input type="file" name="ProfileImg" onChange={handleImgChange} value={profileImg_preview} />
          <div>Cover Image</div> 
          <input type="file" name="CoverImg" onChange={handleImgChange} value={coverImg_preview} />
        </div>

        <button className="button edit-btn" onClick={handlesubmit}>Update</button>

      </form>

    </Modal>
  );
}

export default ProfileModal