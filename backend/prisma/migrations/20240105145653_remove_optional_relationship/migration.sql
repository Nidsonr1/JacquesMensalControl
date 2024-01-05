/*
  Warnings:

  - Made the column `lodgesId` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `roleId` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_lodgesId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_roleId_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "lodgesId" SET NOT NULL,
ALTER COLUMN "roleId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_lodgesId_fkey" FOREIGN KEY ("lodgesId") REFERENCES "Lodges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
