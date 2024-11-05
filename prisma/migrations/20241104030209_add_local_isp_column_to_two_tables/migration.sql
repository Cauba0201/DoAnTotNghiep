-- AlterTable
ALTER TABLE "pingapp" ADD COLUMN     "local_isp" VARCHAR(100);

-- AlterTable
ALTER TABLE "testping" ADD COLUMN     "local_isp" VARCHAR(100);

-- AlterTable
ALTER TABLE "top_countries_with_lowest_latency" ADD COLUMN     "local_isp" VARCHAR(100);
