-- CreateTable
CREATE TABLE "top_countries_with_lowest_latency" (
    "id" SERIAL NOT NULL,
    "country" VARCHAR(120) NOT NULL,
    "isp" VARCHAR(100) NOT NULL,
    "ip" VARCHAR(20) NOT NULL,
    "avg_latency" VARCHAR(10) NOT NULL,
    "packet_loss" VARCHAR(10) NOT NULL,
    "packets_sent" INTEGER,

    CONSTRAINT "top_countries_with_lowest_latency_pkey" PRIMARY KEY ("id")
);
