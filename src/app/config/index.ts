import dotenv from 'dotenv';

dotenv.config();

export const config = {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,

  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,

  SUPERADMIN: {
    NAME: process.env.SUPERADMIN_NAME || '',
    EMAIL: process.env.SUPERADMIN_EMAIL || '',
    CONTACT: process.env.SUPERADMIN_CONTACT || '',
    USERNAME: process.env.SUPERADMIN_USERNAME || '',
    PASSWORD: process.env.SUPERADMIN_PASSWORD || '',
    GENDER: process.env.SUPERADMIN_GENDER || '',
    ROLE: process.env.SUPERADMIN_ROLE || '',
    IS_DELETED: process.env.SUPERADMIN_ISDELETED,
  },
};
