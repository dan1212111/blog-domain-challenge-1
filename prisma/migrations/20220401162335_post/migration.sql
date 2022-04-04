/*
  Warnings:

  - You are about to drop the column `profileId` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_profileId_fkey";

-- DropIndex
DROP INDEX "Post_profileId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "profileId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_userId_key" ON "Post"("userId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
