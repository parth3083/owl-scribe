-- CreateTable
CREATE TABLE "usageData" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "charCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pagePath" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "IPAddress" TEXT NOT NULL,

    CONSTRAINT "usageData_pkey" PRIMARY KEY ("id")
);
