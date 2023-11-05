-- CreateEnum
CREATE TYPE "EUserRaceAndEthnicity" AS ENUM ('ASIAN', 'BLACK', 'WHITE', 'INDIAN', 'MIDDLE_EASTERN', 'PACIFIC_ISLANDER', 'AFRICAN_OR_Black', 'HISPANIC_OR_LATINO');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "etnicity" "EUserRaceAndEthnicity";
