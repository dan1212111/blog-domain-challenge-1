-- AlterTable
ALTER TABLE "User" ADD COLUMN     "commentId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
