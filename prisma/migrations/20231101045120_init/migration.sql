/*
  Warnings:

  - The `type` column on the `Case` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EPAD_VERSION" AS ENUM ('FREE', 'PAID');

-- CreateEnum
CREATE TYPE "ECASE_TYPE" AS ENUM ('TORTS', 'MEDICAL_MALPRACTICE');

-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "paidVersion" "EPAD_VERSION" NOT NULL DEFAULT 'FREE',
DROP COLUMN "type",
ADD COLUMN     "type" "ECASE_TYPE" DEFAULT 'TORTS';

-- DropEnum
DROP TYPE "ETYPE_CASE";
