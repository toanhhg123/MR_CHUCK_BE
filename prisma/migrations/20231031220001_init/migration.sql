-- CreateEnum
CREATE TYPE "ETYPE_CASE" AS ENUM ('FREE', 'PAID');

-- CreateEnum
CREATE TYPE "ESjqApprovalStatus" AS ENUM ('APPROVED', 'PENDING');

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "type" "ETYPE_CASE" NOT NULL DEFAULT 'FREE',
    "description" TEXT,
    "locationId" TEXT,
    "subDepartment" TEXT,
    "attorneyName" TEXT,
    "attorneyFirmName" TEXT,
    "neutralSummary" TEXT,
    "additionalInfo" TEXT,
    "complaintFormUploadPath" TEXT,
    "sjqSubmissionDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "sjqApprovalStatus" "ESjqApprovalStatus" DEFAULT 'APPROVED',

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
