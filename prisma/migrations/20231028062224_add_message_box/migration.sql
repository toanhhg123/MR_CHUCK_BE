/*
  Warnings:

  - Added the required column `message` to the `MessageTextBox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MessageTextBox" ADD COLUMN     "message" TEXT NOT NULL;
