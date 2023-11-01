-- CreateEnum
CREATE TYPE "EMemberInRoom" AS ENUM ('MEMBER', 'OWNER', 'DEPUTY');

-- AlterTable
ALTER TABLE "UserRoom" ADD COLUMN     "memberType" "EMemberInRoom" NOT NULL DEFAULT 'MEMBER';
