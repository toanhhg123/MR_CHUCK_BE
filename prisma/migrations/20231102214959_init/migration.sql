-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar_imagesAvatar_id" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_avatar_imagesAvatar_id_fkey" FOREIGN KEY ("avatar_imagesAvatar_id") REFERENCES "avatar_images"("avatar_id") ON DELETE SET NULL ON UPDATE CASCADE;
