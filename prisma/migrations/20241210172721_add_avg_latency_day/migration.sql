/*
  Warnings:

  - You are about to drop the column `latency` on the `avg_latency_day` table. All the data in the column will be lost.
  - Added the required column `avg_latency` to the `avg_latency_day` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "avg_latency_day" DROP COLUMN "latency",
ADD COLUMN     "avg_latency" INTEGER NOT NULL;
