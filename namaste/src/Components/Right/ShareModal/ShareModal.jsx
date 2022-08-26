import { Modal, useMantineTheme } from '@mantine/core';
import AddPost from '../../PostLayout/Add-post/Addpost.jsx';

function ShareModal({share, setShare}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      opened={share}
      onClose={()=>setShare(false)}
    >

      <AddPost/>
      
    </Modal>
  );
}

export default ShareModal