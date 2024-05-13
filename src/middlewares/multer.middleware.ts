import path from "path"
import multer from "multer"

const uploadDirectory = path.join(__dirname, "../../public/uploads/images")

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname))
  },
})

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
    cb(null, true)
  } else {
    cb(new Error("File must be an image"), false)
  }
}

const upload = multer({
  storage: diskStorage,
  fileFilter
})

export default upload