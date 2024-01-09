/*
  Warnings:

  - Added the required column `logo` to the `Lodges` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lodges" ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "logo" TEXT NOT NULL;
