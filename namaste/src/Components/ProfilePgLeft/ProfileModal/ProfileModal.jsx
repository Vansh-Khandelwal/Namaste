import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModal.css'

function ProfileModal({openEdit, setOpenEdit}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='50%'
      opened={openEdit}
      onClose={()=>setOpenEdit(false)}
    >
    
    <form className="InfoForm">
        <h3>Your Info</h3>

        <div>
            <input type="text" placeholder="First Name" name="FirstName" className="info-info"/>
            <input type="text" placeholder="Last Name" name="LastName" className="info-info"/>
        </div>

        <div>
            <input type="text" placeholder="Works at/Study in" name="WorksAt" className="info-info"/>
        </div>

        <div>       
            <input type="text" placeholder="Lives in" name="LivesIn" className="info-info"/>
            <input type="text" placeholder="Country" name="Country" className="info-info"/>
        </div>

        <div>
            <input type="text" placeholder="Relationship Status" name="Status" className="info-info"/>
        </div>

        <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button edit-btn" type='submit'>Update</button>

    </form>

    </Modal>
  );
}

export default ProfileModal