-- CreateTable
CREATE TABLE "avg_latency_day" (
    "id" SERIAL NOT NULL,
    "latency" DOUBLE PRECISION NOT NULL,
    "local_isp" VARCHAR(100) NOT NULL,
    "update_date" DATE NOT NULL,

    CONSTRAINT "avg_latency_day_pkey" PRIMARY KEY ("id")
);
