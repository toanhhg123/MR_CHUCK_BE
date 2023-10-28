/*
  Warnings:

  - Made the column `name` on table `MessageBox` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MessageBox" ALTER COLUMN "name" SET NOT NULL;
