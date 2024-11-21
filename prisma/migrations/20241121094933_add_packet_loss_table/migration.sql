-- CreateTable
CREATE TABLE "packet_loss" (
    "id" SERIAL NOT NULL,
    "packloss" INTEGER NOT NULL,
    "local_isp" VARCHAR(100) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "packet_loss_pkey" PRIMARY KEY ("id")
);
