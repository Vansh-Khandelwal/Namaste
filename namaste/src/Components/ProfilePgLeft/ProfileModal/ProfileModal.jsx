import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../../Actions/UploadActions/uploadImage.js';
import { updateUser } from '../../../Actions/UserActions/userAction.js';

import './ProfileModal.css'

function ProfileModal({openEdit, setOpenEdit, data}) {
  const theme = useMantineTheme();

  const {Password, ...other} = data
  const [formData, setFormData] = useState(other)
  const [profileImg, setProfileImg] = useState(null)
  const [coverImg, setCoverImg] = useState(null)

  const dispatch = useDispatch()
  const param = useParams()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleImgChange = (event) => {
    if(event.target.files&&event.target.files[0])
    {
      let img = event.target.files[0];
      event.target.name === "ProfileImg" ? setProfileImg(img) : setCoverImg(img)
    }
  }

  const handlesubmit = (event) => {

    event.preventDefault()

    let userData = formData

    if(profileImg)
    {
        const data = new FormData()
        const filename = Date.now() + profileImg.name
        data.append("name", filename)
        data.append("file", profileImg)
        userData.ProfileImg = filename

        try {
          dispatch(uploadImage(data))
        } catch (error) {
          console.log(error)
        }
    }

    if(coverImg)
    {
        const data = new FormData()
        const filename = Date.now() + coverImg.name
        data.append("name", filename)
        data.append("file", coverImg)
        userData.CoverImg = filename

        try {
          dispatch(uploadImage(data))
        } catch (error) {
          console.log(error)
        }
    }

    dispatch(updateUser(param.id, userData))
    setOpenEdit(false)

  }

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
              <input type="text" placeholder="First Name" name="FirstName" className="info-info" onChange={handleChange} value = {formData.Firstname} />
              <input type="text" placeholder="Last Name" name="LastName" className="info-info" onChange={handleChange} value = {formData.Lastname} />
          </div>

          <div>
              <input type="text" placeholder="Works at/Study in" name="WorksAt" className="info-info" onChange={handleChange} value = {formData.WorksAt} />
          </div>

          <div>       
              <input type="text" placeholder="Lives in" name="LivesIn" className="info-info" onChange={handleChange} value = {formData.LivesIn} />
              <input type="text" placeholder="Country" name="Country" className="info-info" onChange={handleChange} value = {formData.Country} />
          </div>

          <div>
              <input type="text" placeholder="Relationship Status" name="Relationship_Status" className="info-info" onChange={handleChange} value = {formData.Relationship_Status} />
          </div>

          <div className="files">
              <div>Profile Image</div>
              <input type="file" name="ProfileImg" onChange={handleImgChange} value = {formData.ProfileImg} />
              <div>Cover Image</div> 
              <input type="file" name="CoverImg" onChange={handleImgChange} value = {formData.CoverImg} />
          </div>

          <button className="button edit-btn" onClick={handlesubmit}>Update</button>

      </form>

    </Modal>
  );
}

export default ProfileModal