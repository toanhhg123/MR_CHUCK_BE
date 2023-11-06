/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Case` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Case_number_key" ON "Case"("number");
