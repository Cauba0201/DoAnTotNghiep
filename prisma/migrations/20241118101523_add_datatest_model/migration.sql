-- CreateTable
CREATE TABLE "data_test" (
    "id" SERIAL NOT NULL,
    "country" VARCHAR(120) NOT NULL,
    "ip" VARCHAR(20) NOT NULL,
    "avg_latency" INTEGER NOT NULL,
    "packet_loss" INTEGER NOT NULL,
    "created_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "packets_sent" INTEGER,
    "isp" VARCHAR(100),
    "local_isp" VARCHAR(100),

    CONSTRAINT "data_test_pkey" PRIMARY KEY ("id")
);
