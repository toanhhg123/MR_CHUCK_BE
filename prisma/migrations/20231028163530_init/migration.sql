-- DropForeignKey
ALTER TABLE "MessageTextBox" DROP CONSTRAINT "MessageTextBox_replyId_fkey";

-- AddForeignKey
ALTER TABLE "MessageTextBox" ADD CONSTRAINT "MessageTextBox_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "MessageTextBox"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTextBox" ADD CONSTRAINT "MessageTextBox_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
