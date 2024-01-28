/*
  Warnings:

  - You are about to drop the column `borrrowsAt` on the `BorrowProcess` table. All the data in the column will be lost.
  - You are about to drop the column `borrState` on the `BorrowableBook` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `BorrowableBook` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `ExchangeableBook` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `SellingBook` table. All the data in the column will be lost.
  - Added the required column `phone` to the `BorrowProcess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `ExchangeProcess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "BorrowProcess_bbId_key";

-- DropIndex
DROP INDEX "ExchangeProcess_eId_key";

-- DropIndex
DROP INDEX "Order_sbId_key";

-- AlterTable
ALTER TABLE "BorrowProcess" DROP COLUMN "borrrowsAt",
ADD COLUMN     "borrState" TEXT NOT NULL DEFAULT 'Pending',
ADD COLUMN     "borrowsAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BorrowableBook" DROP COLUMN "borrState",
DROP COLUMN "image";

-- AlterTable
ALTER TABLE "ExchangeProcess" ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "ExchangeableBook" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "SellingBook" DROP COLUMN "image";
