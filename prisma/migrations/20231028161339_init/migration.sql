-- CreateEnum
CREATE TYPE "ERole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "EMessageBoxStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'CLOSED');

-- CreateEnum
CREATE TYPE "EMemberInMessageBox" AS ENUM ('MEMBER', 'OWNER', 'DEPUTY');

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" "ERole" NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "ERole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageBox" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "process" INTEGER NOT NULL DEFAULT 0,
    "location" TEXT NOT NULL,
    "status" "EMessageBoxStatus" NOT NULL DEFAULT 'NEW',
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageBoxMember" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "EMemberInMessageBox" NOT NULL DEFAULT 'MEMBER',
    "messageBoxId" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageBoxMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageTextBox" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "replyId" TEXT,
    "message" TEXT NOT NULL,
    "messageBoxId" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageTextBox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "MessageBox" ADD CONSTRAINT "MessageBox_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageBoxMember" ADD CONSTRAINT "MessageBoxMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageBoxMember" ADD CONSTRAINT "MessageBoxMember_messageBoxId_fkey" FOREIGN KEY ("messageBoxId") REFERENCES "MessageBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTextBox" ADD CONSTRAINT "MessageTextBox_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTextBox" ADD CONSTRAINT "MessageTextBox_messageBoxId_fkey" FOREIGN KEY ("messageBoxId") REFERENCES "MessageBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
