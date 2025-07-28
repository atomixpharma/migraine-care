/*
  Warnings:

  - You are about to drop the column `birthDate` on the `IntakeForm` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `IntakeForm` table. All the data in the column will be lost.
  - You are about to drop the column `ohipNumber` on the `IntakeForm` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `IntakeForm` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `duration` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `severity` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.
  - Made the column `insurance` on table `IntakeForm` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_IntakeForm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "insurance" TEXT NOT NULL,
    "symptoms" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    CONSTRAINT "IntakeForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_IntakeForm" ("fullName", "id", "insurance", "symptoms", "userId") SELECT "fullName", "id", "insurance", "symptoms", "userId" FROM "IntakeForm";
DROP TABLE "IntakeForm";
ALTER TABLE "new_IntakeForm" RENAME TO "IntakeForm";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "name") SELECT "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
