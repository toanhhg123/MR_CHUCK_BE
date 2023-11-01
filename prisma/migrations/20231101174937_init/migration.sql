-- CreateTable
CREATE TABLE "MessageCase" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "replyId" TEXT,
    "message" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avatar_images" (
    "avatar_id" TEXT NOT NULL,
    "gender" TEXT,
    "age_range" TEXT,
    "etnicity" TEXT,
    "image_url" TEXT,

    CONSTRAINT "avatar_images_pkey" PRIMARY KEY ("avatar_id")
);

-- AddForeignKey
ALTER TABLE "MessageCase" ADD CONSTRAINT "MessageCase_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageCase" ADD CONSTRAINT "MessageCase_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "MessageCase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageCase" ADD CONSTRAINT "MessageCase_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
