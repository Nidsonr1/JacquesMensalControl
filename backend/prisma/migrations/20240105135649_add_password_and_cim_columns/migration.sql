/*
  Warnings:

  - Added the required column `cim` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "cim" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
