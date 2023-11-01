/*
  Warnings:

  - Added the required column `userCreatedId` to the `Case` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userCreatedId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_userCreatedId_fkey" FOREIGN KEY ("userCreatedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
