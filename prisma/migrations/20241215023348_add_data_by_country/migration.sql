-- CreateTable
CREATE TABLE "data_by_country" (
    "id" SERIAL NOT NULL,
    "country" VARCHAR(120) NOT NULL,
    "avg_latency" INTEGER NOT NULL,
    "packet_loss" INTEGER NOT NULL,
    "local_isp" VARCHAR(100) NOT NULL,
    "update_date" DATE NOT NULL,

    CONSTRAINT "data_by_country_pkey" PRIMARY KEY ("id")
);
