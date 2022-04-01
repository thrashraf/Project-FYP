import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './frontend/public/assets');
    },
    filename: (req, file, callBack) => {
        console.log(file)
        const fileName = path.parse(file.originalname);
        callBack(null, fileName.name.split(" ").join("_") + Date.now() + fileName.ext);
    }
})

export const upload = multer({storage: storage});