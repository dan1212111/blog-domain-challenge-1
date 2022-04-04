/*
  Warnings:

  - Added the required column `biography` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "biography" VARCHAR(120) NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
