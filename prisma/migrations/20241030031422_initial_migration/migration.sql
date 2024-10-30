-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(500) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testping" (
    "id" SERIAL NOT NULL,
    "country" VARCHAR(120) NOT NULL,
    "isp" VARCHAR(100) NOT NULL,
    "ip" VARCHAR(20) NOT NULL,
    "packetSent" INTEGER NOT NULL,
    "avgLatency" VARCHAR(50) NOT NULL,
    "packetLoss" VARCHAR(50) NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_name_key" ON "admins"("name");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "testping_ip_key" ON "testping"("ip");
