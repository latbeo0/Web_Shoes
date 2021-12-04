import { useState, useEffect } from 'react';
import {
    AvatarUpload,
    AvatarEdit,
    InputAvatar,
    LabelAvatar,
    PencilIcon,
    AvatarPreview,
    ImagePreview,
} from './ImageProduct_Elements';

const ImageProduct = ({ value }) => {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        if (file) {
            file.preview = URL.createObjectURL(file);

            setAvatar(file);
        }
    };

    return (
        <AvatarUpload>
            <AvatarEdit>
                <InputAvatar
                    type='file'
                    id={value}
                    onChange={handlePreviewAvatar}
                />
                <LabelAvatar for={value}>
                    <PencilIcon />
                </LabelAvatar>
            </AvatarEdit>
            <AvatarPreview>
                {avatar && <ImagePreview src={avatar.preview} />}
            </AvatarPreview>
        </AvatarUpload>
    );
};

export default ImageProduct;
