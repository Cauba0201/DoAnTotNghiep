-- CreateTable
CREATE TABLE "pingmtr" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "ipHost" TEXT NOT NULL,
    "latency" INTEGER NOT NULL,
    "packetLoss" DOUBLE PRECISION NOT NULL,
    "packetsSent" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pingmtr_pkey" PRIMARY KEY ("id")
);
