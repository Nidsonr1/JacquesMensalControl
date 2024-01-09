/*
  Warnings:

  - You are about to drop the column `lodgesId` on the `Users` table. All the data in the column will be lost.
  - Added the required column `lodgeId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_lodgesId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_roleId_fkey";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "lodgesId",
ADD COLUMN     "lodgeId" TEXT NOT NULL,
ALTER COLUMN "roleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_lodgeId_fkey" FOREIGN KEY ("lodgeId") REFERENCES "Lodges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
