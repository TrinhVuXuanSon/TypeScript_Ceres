import React, { useEffect, useState } from "react";

function Avatar() {
  const [avatar, setAvatar] = useState(true);

  useEffect(() => {
    return () => {
      if (avatar) {
        URL.revokeObjectURL(avatar.preview);
      } 
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };
  return (
    <>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && (
        <img src={avatar.preview} alt="avatar" style={{ width: "80%" }} />
      )}
    </>
  );
}
export default Avatar;
