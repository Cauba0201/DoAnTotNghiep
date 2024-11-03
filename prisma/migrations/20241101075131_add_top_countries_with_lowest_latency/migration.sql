/*
  Warnings:

  - You are about to drop the column `avgLatency` on the `testping` table. All the data in the column will be lost.
  - You are about to drop the column `packetLoss` on the `testping` table. All the data in the column will be lost.
  - You are about to drop the column `packetSent` on the `testping` table. All the data in the column will be lost.
  - Added the required column `avg_latency` to the `testping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packet_loss` to the `testping` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "admins_name_key";

-- DropIndex
DROP INDEX "testping_ip_key";

-- AlterTable
ALTER TABLE "admins" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "testping" DROP COLUMN "avgLatency",
DROP COLUMN "packetLoss",
DROP COLUMN "packetSent",
ADD COLUMN     "avg_latency" VARCHAR(10) NOT NULL,
ADD COLUMN     "packet_loss" VARCHAR(120) NOT NULL,
ADD COLUMN     "packets_sent" INTEGER,
ALTER COLUMN "isp" DROP NOT NULL,
ALTER COLUMN "created_date" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "updated_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_date" SET DATA TYPE TIMESTAMP(6);

-- CreateTable
CREATE TABLE "pingapp" (
    "id" SERIAL NOT NULL,
    "application_name" VARCHAR(120),
    "ip" VARCHAR(20),
    "avg_latency" VARCHAR(10),
    "packet_loss" VARCHAR(10),
    "created_date" TIMESTAMP(6),
    "updated_date" TIMESTAMP(6),
    "packets_sent" INTEGER,
    "isp" VARCHAR(100),

    CONSTRAINT "pingapp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "created_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");
