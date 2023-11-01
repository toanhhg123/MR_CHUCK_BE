/*
  Warnings:

  - You are about to drop the `MessageBox` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessageBoxMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessageTextBox` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MessageBox" DROP CONSTRAINT "MessageBox_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "MessageBoxMember" DROP CONSTRAINT "MessageBoxMember_messageBoxId_fkey";

-- DropForeignKey
ALTER TABLE "MessageBoxMember" DROP CONSTRAINT "MessageBoxMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "MessageTextBox" DROP CONSTRAINT "MessageTextBox_messageBoxId_fkey";

-- DropForeignKey
ALTER TABLE "MessageTextBox" DROP CONSTRAINT "MessageTextBox_replyId_fkey";

-- DropForeignKey
ALTER TABLE "MessageTextBox" DROP CONSTRAINT "MessageTextBox_senderId_fkey";

-- DropTable
DROP TABLE "MessageBox";

-- DropTable
DROP TABLE "MessageBoxMember";

-- DropTable
DROP TABLE "MessageTextBox";

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "replyId" TEXT,
    "message" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
