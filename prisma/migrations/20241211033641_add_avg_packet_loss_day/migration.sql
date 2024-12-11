/*
  Warnings:

  - You are about to drop the column `avg_latency` on the `avg_latency_day` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "avg_latency_day" DROP COLUMN "avg_latency",
ADD COLUMN     "latency" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "avg_packet_loss_day" (
    "id" SERIAL NOT NULL,
    "packloss" INTEGER NOT NULL,
    "local_isp" VARCHAR(100) NOT NULL,
    "update_date" DATE NOT NULL,

    CONSTRAINT "avg_packet_loss_day_pkey" PRIMARY KEY ("id")
);
