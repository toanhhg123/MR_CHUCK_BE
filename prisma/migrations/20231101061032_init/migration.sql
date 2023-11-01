/*
  Warnings:

  - Added the required column `caseId` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "caseId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "gender" TEXT;

-- CreateTable
CREATE TABLE "UserRoom" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "UserRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRoom" ADD CONSTRAINT "UserRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
