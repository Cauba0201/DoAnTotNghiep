-- CreateTable
CREATE TABLE "chart_four" (
    "id" SERIAL NOT NULL,
    "avg_latency" INTEGER NOT NULL,
    "local_isp" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chart_four_pkey" PRIMARY KEY ("id")
);
