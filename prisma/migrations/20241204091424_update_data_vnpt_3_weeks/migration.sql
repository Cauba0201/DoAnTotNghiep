-- CreateTable
CREATE TABLE "data_vnpt_3_weeks" (
    "id" SERIAL NOT NULL,
    "country" VARCHAR(120) NOT NULL,
    "ip" VARCHAR(20) NOT NULL,
    "avg_latency" INTEGER NOT NULL,
    "packet_loss" INTEGER NOT NULL,
    "packets_sent" INTEGER NOT NULL,
    "isp" VARCHAR(100) NOT NULL,
    "local_isp" VARCHAR(100) NOT NULL,
    "created_date" DATE NOT NULL,

    CONSTRAINT "data_vnpt_3_weeks_pkey" PRIMARY KEY ("id")
);
