-- CreateEnum
CREATE TYPE "ECaseStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'CLOSED');

-- CreateEnum
CREATE TYPE "ETypeRoom" AS ENUM ('BOX', 'GROUP');

-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "status" "ECaseStatus" NOT NULL DEFAULT 'NEW';

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "type" "ETypeRoom" NOT NULL DEFAULT 'GROUP',

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
